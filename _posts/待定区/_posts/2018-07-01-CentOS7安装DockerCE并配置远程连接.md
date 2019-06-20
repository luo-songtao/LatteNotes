---
layout: post
title: CentOS7安装DockerCE并配置远程连接
tags: [docker,centos,安装配置]
category: ['待整理']
---

### CentOS7安装Docker

CentOS7上安装Docker CE的步骤和官网几乎一样，只是这里采用的是阿里的软件源，加速器也是使用阿里提供的加速器(免费)。

```bash
# step 1: 安装必要的一些系统工具
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
# Step 2: 添加软件源信息
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# Step 3: 更新并安装Docker-CE
sudo yum makecache fast
sudo yum -y install docker-ce

# 注意：
# 官方软件源默认启用了最新的软件，您可以通过编辑软件源的方式获取各个版本的软件包。例如官方并没有将测试版本的软件源置为可用，您可以通过以下方式开启。同理可以开启各种测试版本等。
# vim /etc/yum.repos.d/docker-ee.repo
#   将[docker-ce-test]下方的enabled=0修改为enabled=1
#
# 安装指定版本的Docker-CE:
# Step 1: 查找Docker-CE的版本:
# yum list docker-ce.x86_64 --showduplicates | sort -r
#   Loading mirror speeds from cached hostfile
#   Loaded plugins: branch, fastestmirror, langpacks
#   docker-ce.x86_64            17.03.1.ce-1.el7.centos            docker-ce-stable
#   docker-ce.x86_64            17.03.1.ce-1.el7.centos            @docker-ce-stable
#   docker-ce.x86_64            17.03.0.ce-1.el7.centos            docker-ce-stable
#   Available Packages
# Step2: 安装指定版本的Docker-CE: (VERSION例如上面的17.03.0.ce.1-1.el7.centos)
# sudo yum -y install docker-ce-[VERSION]

# 启动docker
sudo service docker start
# 查看docker
sudo docker version
```
镜像加速器配置，参考：[阿里云提供的加速器配置](https://yq.aliyun.com/articles/29941)，登录[容器Hub服务](https://cr.console.aliyun.com/)进行获取并在`/etc/docker/daemon.json`中配置

### CentOS7中配置Docker远程连接

```bash
# Step 1: 添加远程连接配置
sudo vi /etc/docker/daemon.json
# 增加hosts配置项："hosts":{"tcp://0.0.0.0:2375", "unix:///var/run/docker.sock"}
# 注意：端口可以随意改，通常使用2375；远程连接使用的tcp协议，因此操作系统还需要打开2375端口
{
  "registry-mirrors": ["填写你的加速器地址"],
  "hosts": [
    "tcp://0.0.0.0:2375",
    "unix:///var/run/docker.sock"
  ]
}

# Step 2: 重启docker
sudo service restart docker

# centos7查看端口开放情况
firewall-cmd --list-ports
# centos7放行端口
# 注意：--permanent意为重启也生效
firewall-cmd --zone=public --add-port=80/tcp --permanent
# centos7关闭端口放行
firewall-cmd --remove-port=80/tcp --permanent

# 检验配置是否成功
# 注意：其他机器连接需使用具体的ip地址
sudo docker -H "127.0.0.1:2375" images
```

因笔者所用python环境、及其他环境，现目前全是基于docker镜像，因此经常用到Pycharm+Docker的方式进行开发环境搭建，需要开启远程连接配置。