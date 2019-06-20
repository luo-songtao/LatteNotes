
var jsondata=[
  
    {
      "title"    : "Hadoop分布式集群搭建配置介绍",
      "category" : "待整理",
      "tags"     : "hadoop, 大数据, 安装配置",
      "url"      : "/Hadoop%E5%88%86%E5%B8%83%E5%BC%8F%E9%9B%86%E7%BE%A4%E6%90%AD%E5%BB%BA%E9%85%8D%E7%BD%AE%E4%BB%8B%E7%BB%8D",
      "date"     : "2019-01-25 00:00:00 -0600",
      "content"  : "环境准备      软件版本示例    系统：CentOS7.5为例、2C4G    三台服务器分配的IP地址：192.168.19.137/138/139    规划：137作为hadoop-master，其他两台作为数据节点138、139分别为hadoop-slave1、hadoop-slave2    jdk使用1.8版本    hadoop使用2.9.1版本，下载地址：http://apache.claz.org/hadoop/common/hadoop-2.9.1/hadoop-2.9.1.tar.gz        host配置和主机名配置    修改所有服务器的/etc/hosts文件，添加以下配置     192.168.19.137 hadoop-master 192.168.19.138 hadoop-slave1 192.168.19.139 hadoop-slave2        依次修改所有的服务器的主机名：HOSTNAME，以hadoop-master为例：在137服务器上    vi /etc/susconfig/network     HOSTNAME=hadoop-master        执行reboot now后生效，注意需要一次修改每一台服务，改为对应的hadoop-slave1、hadoop-slave2等    之后的配置将使用HOSTNAME进行域名配置，这样便于管理和识别        JDK安装： 方法一：官网下载JDK，https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html 方法二：使用安装JDK：`yum -y install java-1.8.0-openjdk*    安装后，配置环境变量，这里以方法一为例：    下载JDK1.8.0解压放到/root/bigdata目录下，并设置软连接/root/bigdata/jdk指向它 vi /root/.bash_profile     export JAVE_HOME=/root/bigdata/jdk export PATH=$PATH:$JAVA_HOME/bin        使用source /root/.bash_profile是配置立即生效  免密登录      以下以hadoop-master为例，配置服务器的本机无密码登录：    生成密钥：ssh-keygen -t rsa    追加公钥：cat ~/.ssh/id_rsa.pub &gt;&gt; ~/.ssh/authorized_keys    设置权限：chmod 600 ~/.ssh/authorized_keys    验证本机能否无密码登录：ssh hadoop-master    其余机器同样的步骤设置        以下设置hadoop-master无密码登录hadoop-slave1、hadoop-slave2    在hadoop-slave1上：                  先复制hadoop-master上的公钥到hadoop-slave1的/root目录下： scp root@hadoop-master:/root/.ssh/id_rsa.pub /root/                    然后将hadoop-master的公钥追加到hadoop-slave1的authorized_keys中：         cat /root/id_rsa.pub &gt;&gt; ~/.ssh/authorized_keys rm -rf /root/id_rsa.pub                      在hadoop-master测试无密码登录hadoop-slave1：ssh hadoop-slave1    hadoop-slave2同理依次配置        与2相反，hadoop-slave1、hadoop-slave2也需要设置无密码登录hadoop-master，设置方法同理  hadoop-master的安装与配置配置hadoop-master的hadoop环境      hadoop-master上下载并解压hadoop安装包放到指定目录，如/root/bigdata/，并未其设置软连接/root/bigdata/hadoop     wget http://apache.claz.org/hadoop/common/hadoop-2.9.1/hadoop-2.9.1.tar.gz tar -xvf hadoop-2.9.1.tar.gz mv hadoop-2.9.1 /root/bigdata/ ln -s /root/bigdata/hadoop-2.9.1 /root/bigdata/hadoop            配置hadoop-master的hadoop环境变量：    编辑vi /root/.bash_profile     export HADOOP_HOME=/root/bigdata/hadoop export PATH=$PATH:$HADOOP_HOME/bin        使用source /root/.bash_profile使之生效  注意：进入/root/bigdata/hadoop/etc/hadoop目录      配置core-site.xml，修改hadoop的核心配置文件    hadoop.tmp.dir：指定hadoop数据存储的临时文件夹；    fs.default.name：指定NameNonde的IP地址和端口号     &lt;configuration&gt;     &lt;property&gt;         &lt;name&gt;hadoop.tmp.dir&lt;/name&gt;         &lt;value&gt;/root/bigdata/hadoop/tmp&lt;/value&gt;     &lt;/property&gt;     &lt;property&gt;         &lt;name&gt;fs.defaultFS&lt;/name&gt;         &lt;value&gt;hdfs://hadoop-master:9000&lt;/value&gt;     &lt;/property&gt; &lt;/configuration&gt;        注意：如没有配置hadoop.tmp.dir参数，此时系统默认的临时目录为：/tmp。而这个目录在每次重启后都会可能被删除，届时必须重新执行format才行，否则会出错    因此这里指定为hadoop home目录下的tmp路径。为避免带来其他问题，建议手动创建并赋予权限mkdir /root/bigdata/hadoop/tmp &amp;&amp; chmod 777 /root/bigdata/hadoop/tmp        配置hdfs-site.xml，修改HDFS的核心配置文件    dfs.replication：指定HDFS的备份因子    dfs.name.dir：指定namenode节点的文件存储目录    dfs.data.dir：指定datanode节点的文件存储目录      &lt;configuration&gt;     &lt;property&gt;         &lt;name&gt;dfs.replication&lt;/name&gt;         &lt;value&gt;3&lt;/value&gt;     &lt;/property&gt;     &lt;property&gt;         &lt;name&gt;dfs.name.dir&lt;/name&gt;         &lt;value&gt;/root/bigdata/hadoop/hdfs/name&lt;/value&gt;     &lt;/property&gt;     &lt;property&gt;         &lt;name&gt;dfs.data.dir&lt;/name&gt;         &lt;value&gt;/root/bigdata/hadoop/hdfs/data&lt;/value&gt;     &lt;/property&gt; &lt;/configuration&gt;            配置mapred-site.xml，修改MapReduce的核心配置文件    先拷贝mapred-site.xml.template为mapred-site.xml，再进行修改    mapreduce.framework.name：设定yarn为MapReduce的资源管理器    mapred.job.tracker：配置HTTP地址与端口     &lt;configuration&gt;   &lt;property&gt;       &lt;name&gt;mapreduce.framework.name&lt;/name&gt;       &lt;value&gt;yarn&lt;/value&gt;   &lt;/property&gt;    &lt;property&gt;       &lt;name&gt;mapred.job.tracker&lt;/name&gt;       &lt;value&gt;http://hadoop-master:9001&lt;/value&gt;   &lt;/property&gt; &lt;/configuration&gt;            配置yarn-site.xml     &lt;configuration&gt; &lt;!-- Site specific YARN configuration properties --&gt;     &lt;property&gt;         &lt;name&gt;yarn.nodemanager.aux-services&lt;/name&gt;         &lt;value&gt;mapreduce_shuffle&lt;/value&gt;     &lt;/property&gt;     &lt;property&gt;         &lt;name&gt;yarn.resourcemanager.hostname&lt;/name&gt;         &lt;value&gt;hadoop-master&lt;/value&gt;     &lt;/property&gt; &lt;/configuration&gt;            配置masters文件    编辑vi /root/bigdata/hadoop/etc/hadoop/masters，如果没有则新建，该文件指定namenode节点所在的服务器    hadoop-master            配置slaves文件：(该文件只在Master机器上配置)    编辑vi /root/bigdata/hadoop/etc/hadoop/slaves，该文件指定哪些服务器节点是datanode节点。删除locahost，添加所有datanode节点的主机名，即slave节点     hadoop-slave1 hadoop-slave2        hadoop-slave的安装与配置  hadoop slave服务器的配置与master的配置全部同步，以master为主，因此配置方法如下：  拷贝master服务器上的hadoop目录到slave机器上，如在master服务器上：     scp -r /root/bigdata/hadoop hadoop-slave1:/root/bigdata/ scp -r /root/bigdata/hadoop hadoop-slave2:/root/bigdata/ # 有多个则一一拷贝            分别将slave机器上的hadoop配置文件夹(hadoop/etc/hadoop)里的slaves文件删除，该文件是master服务器独有的    在slave机器上配置hadoop的环境变量vi /root/.bash_profile：    export HADOOP_HOME=/root/bigdataexport PATH=$PATH:$HADOOP_HOME/bin      source /root/.bash_profile启动Hadoop集群完成以上配置则可以开始启动Hadoop集群但在启动前还需要设置防火墙，测试阶段可以直接关闭所有机器的防火墙service firewalld stop，生成环境那么就需要设置端口过滤规则，这里不赘述      初始化HDFS文件系统：    在master服务器上：hadoop namenode -format    该命令只需要在第一次启动服务前执行，之后不用再执行        启动Hadoop：    在master服务器上：/root/bigdata/hadoop/sbin/start-all.sh        运行成功后，分别在master和slave服务器上使用jps查看hadoop的运行进程：    master应有类似如下的几个进程：     4673 SecondaryNameNode 4475 NameNode 4831 ResourceManager        每个slave应有类似如下的几个进程：     2405 DataNode 2521 NodeManager      同时也可以通过master服务器的50070端口查看hadoop的WEB界面"
    } ,
  
    {
      "title"    : "基于Ubuntu18.04的shadowsocks-qt5安装并配置PAC规则",
      "category" : "待整理",
      "tags"     : "shadowsocks, ubuntu, 安装配置",
      "url"      : "/%E5%9F%BA%E4%BA%8EUbuntu18.04%E7%9A%84shadowsocks-qt5%E5%AE%89%E8%A3%85%E5%B9%B6%E9%85%8D%E7%BD%AEPAC%E8%A7%84%E5%88%99",
      "date"     : "2018-07-06 03:00:00 -0500",
      "content"  : "大家应该比较清楚，对于我们程序员来说，翻越某墙的本领几乎已成为我们的基础技能之一。因为很多我们所使用的服务或者要查看某些服务的官方文档，直接访问，要么没法打开，要么就慢得出奇。不过还好，它的出现让笔者方便了不少，便宜实惠又好用。一般在windows、MacOS、Android、IOS等平台上，都是有对应的图形化ss客户端。在github上下载，直接安装就能使用。并且基本自带PAC功能。不过在DeskTop的Linux上使用图形化ss客户端，我们就要费点周折了。因为只能自行编译安装shadowsocks-qt5，其实其安装教程，github上已经非常详尽了，只不过笔者在安装依赖环境时也是遇到些问题，这里就针对我们常用的桌面版Liunx(Ubuntu18.04)，总结以下安装过程。编译和安装libQtShadowsocks依赖环境：  Qt &gt;= 5.5  Botan-2 &gt;= 2.3.0          Or Botan-1.10 (Not recommended)        CMake &gt;= 3.1  A C++ Compiler that supports C++14 features (i.e. GCC &gt;= 4.9)建议：先安装一个aptitude(sudo apt-get install -y aptitude)，因为它除了支持apt-get的所有命令外，还有比如search这样的命令，对于确定模块的完整名称非常有帮助Step 1: 安装GCC  一般情况下，直接sudo aptitude -y install gcc即可Step 2: 安装CMake  一般情况下，直接sudo aptitude -y install cmake即可Step 3: 安装Qt5  下载Qt5安装包，建议5.9及以上          找到linux版本的安装包下载      利用chmod +x 安装包名称添加可执行权限      ./安装包名称一路安装即可（注意：要把Qt5勾选上）      Step 4: 安装Botan  一般情况下，直接sudo aptitude -y install botan1.10-dbg即可          注意1：官方建议是安装2版本。      注意2：如果使用2版本的botan，之后cmake命令时还需要添加-DUSE_BOTAN2=ON。但我尝试直接安装botan2版本，但cmake没有成功过。原因应该是我没安装正确的版本，因为aptitude search botan可以看到很多个版本的botan。      Final Step: 编译和安装      clone或直接下载 libQtShadowsocks 的stable分支        进入代码目录（CMakeLists.txt所在路径）      mkdir build &amp;&amp; cd build  cmake .. -DCMAKE_INSTALL_PREFIX=/usr  make -j4  sudo make install      编译和安装shadowsocks-qt5依赖环境：  cmake &gt;= 3.1.0  qt5-qtbase-gui &gt;= 5.2 (qtbase5 in Debian/Ubuntu)  qrencode (libqrencode in Debian/Ubuntu)  libQtShadowsocks &gt;= 1.10.0 (libqtshadowsocks in Debian/Ubuntu. DON’T use the trunk code)  zbar (libzbar0 or libzbar in Debian/Ubuntu)  libappindicator (libappindicator1 in Debian/Ubuntu)Step 1: 安装libQtShadowsocks  见前一节Step 2: 安装CMake  同上Step 3: 安装qrencode  一般情况下，直接sudo aptitude -y install libqrencode-dev即可Step 4: 安装zbar  一般情况下，直接sudo aptitude -y install libzbar-dev即可          注意：直接安装libzbar-dev      Step 4: 安装libappindicator  一般情况下，直接sudo aptitude -y install libappindicator1即可Final Step：编译和安装      clone或直接下载 shadowsocks-qt5 的stable分支        进入代码目录（CMakeLists.txt所在路径）      mkdir build &amp;&amp; cd build  cmake .. -DCMAKE_INSTALL_PREFIX=/usr  make -j4  sudo make install      配置shadowsocks-qt5然后，就可以打开你的shadowsocks图形界面客户端了      连接 » 添加 » 手动        设置 » 常规设置          勾选登录时启动(开机自启)        Ubuntu中：  但是此时，全局都是使用ss客户端进行代理，因此接下来，需要改为PAC模式，才能让我们更舒服的使用。配置PAC上网规则依赖：genpacStep 1：安装pip工具(如有，请忽略）。默认Ubuntu18.04只有python365，且不具有pip工具。  使用get-pip.py安装，只会安装pip(而sudo apt-get install python3-pip，通常会额外安装一个python解释器)          安装方法          curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py  python3 get-pip.py                      注意：建议安装一个新版本的python解释器使用，但会带来维护多版本python的问题，因此也考虑使用虚拟环境来操作      Step 2：安装genpac，并生成pac文件      pip install genpac    构建PAC文件          可在如home目录下创建一个PAC文件夹，专门存放PAC配置文件          mkdir ~/PAC  cd ~/PAC  genpac --pac-proxy SOCKS5 127.0.0.1:1080 --gfwlist-proxy=SOCKS5 127.0.0.1:1080 --gfwlist-url=https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt --output=autoproxy.pac                      使用PAC文件实现非全局代理          将生成的autoproxy.pac文件所在绝对路径设置为自动代理的URL路径        同时注意：此时shadsocks-qt5中的代理配置，需要改为socks5模式      自此，安装配置完成，接下来尽情的上网吧"
    } ,
  
    {
      "title"    : "Ubuntu18.04安装DockerCE并配置远程连接",
      "category" : "待整理",
      "tags"     : "docker, ubuntu, 安装配置",
      "url"      : "/Ubuntu18.04%E5%AE%89%E8%A3%85DockerCE%E5%B9%B6%E9%85%8D%E7%BD%AE%E8%BF%9C%E7%A8%8B%E8%BF%9E%E6%8E%A5",
      "date"     : "2018-07-02 04:00:00 -0500",
      "content"  : "Ubuntu18.04安装DockerUbuntu上安装Docker CE的步骤和官网几乎一样，只是这里采用的是阿里的软件源，加速器也是使用阿里提供的加速器(免费)。# step 1: 安装必要的一些系统工具sudo apt-get updatesudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common# step 2: 安装GPG证书curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -# Step 3: 写入软件源信息sudo add-apt-repository deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable# Step 4: 更新并安装Docker-CEsudo apt-get -y updatesudo apt-get -y install docker-ce# 安装指定版本的Docker-CE:# Step 1: 查找Docker-CE的版本:# apt-cache madison docker-ce#   docker-ce | 17.03.1~ce-0~ubuntu-xenial | http://mirrors.aliyun.com/docker-ce/linux/ubuntu xenial/stable amd64 Packages#   docker-ce | 17.03.0~ce-0~ubuntu-xenial | http://mirrors.aliyun.com/docker-ce/linux/ubuntu xenial/stable amd64 Packages# Step 2: 安装指定版本的Docker-CE: (VERSION例如上面的17.03.1~ce-0~ubuntu-xenial)# sudo apt-get -y install docker-ce=[VERSION]# 启动dockersudo service docker start# 查看dockersudo docker version镜像加速器配置，参考：阿里云提供的加速器配置，登录容器Hub服务进行获取并在/etc/docker/daemon.json中配置Ubuntu18.04中配置Docker远程连接# Step 1: 添加远程连接配置sudo vi /etc/default/docker# 修改DOCKER_OPTS# 注意：端口可以随意改，通常使用2375；远程连接使用的tcp协议，因此操作系统还需要打开2375端口DOCKER_OPTS='-H 0.0.0.0:2375 -H unix:///var/run/docker.sock'# Step 2: 修改docker的service启动配置sudo vi /lib/systemd/system/docker.service# 将‘ExecStart=/usr/bin/dockerd -H fd:// ’ 改为ExecStart=/usr/bin/dockerd -H fd:// $DOCKER_OPTS# 并同时在该行下面添加下句话EnvironmentFile=/etc/default/docker# Step 3: 重载service服务配置（因为刚刚我们改动了）sudo systemctl daemon-reload# Step 4: 重启dockersudo systemctl restart docker# 检验配置是否成功sudo docker -H 127.0.0.1:2375 images注意：Ubuntu18.04的远程连接配置和CentOS7的有所不同，CentOS7是在daemon.json中配置"
    } ,
  
    {
      "title"    : "CentOS7安装DockerCE并配置远程连接",
      "category" : "待整理",
      "tags"     : "docker, centos, 安装配置",
      "url"      : "/CentOS7%E5%AE%89%E8%A3%85DockerCE%E5%B9%B6%E9%85%8D%E7%BD%AE%E8%BF%9C%E7%A8%8B%E8%BF%9E%E6%8E%A5",
      "date"     : "2018-07-01 00:00:00 -0500",
      "content"  : "CentOS7安装DockerCentOS7上安装Docker CE的步骤和官网几乎一样，只是这里采用的是阿里的软件源，加速器也是使用阿里提供的加速器(免费)。# step 1: 安装必要的一些系统工具sudo yum install -y yum-utils device-mapper-persistent-data lvm2# Step 2: 添加软件源信息sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo# Step 3: 更新并安装Docker-CEsudo yum makecache fastsudo yum -y install docker-ce# 注意：# 官方软件源默认启用了最新的软件，您可以通过编辑软件源的方式获取各个版本的软件包。例如官方并没有将测试版本的软件源置为可用，您可以通过以下方式开启。同理可以开启各种测试版本等。# vim /etc/yum.repos.d/docker-ee.repo#   将[docker-ce-test]下方的enabled=0修改为enabled=1## 安装指定版本的Docker-CE:# Step 1: 查找Docker-CE的版本:# yum list docker-ce.x86_64 --showduplicates | sort -r#   Loading mirror speeds from cached hostfile#   Loaded plugins: branch, fastestmirror, langpacks#   docker-ce.x86_64            17.03.1.ce-1.el7.centos            docker-ce-stable#   docker-ce.x86_64            17.03.1.ce-1.el7.centos            @docker-ce-stable#   docker-ce.x86_64            17.03.0.ce-1.el7.centos            docker-ce-stable#   Available Packages# Step2: 安装指定版本的Docker-CE: (VERSION例如上面的17.03.0.ce.1-1.el7.centos)# sudo yum -y install docker-ce-[VERSION]# 启动dockersudo service docker start# 查看dockersudo docker version镜像加速器配置，参考：阿里云提供的加速器配置，登录容器Hub服务进行获取并在/etc/docker/daemon.json中配置CentOS7中配置Docker远程连接# Step 1: 添加远程连接配置sudo vi /etc/docker/daemon.json# 增加hosts配置项：hosts:{tcp://0.0.0.0:2375, unix:///var/run/docker.sock}# 注意：端口可以随意改，通常使用2375；远程连接使用的tcp协议，因此操作系统还需要打开2375端口{  registry-mirrors: [填写你的加速器地址],  hosts: [    tcp://0.0.0.0:2375,    unix:///var/run/docker.sock  ]}# Step 2: 重启dockersudo service restart docker# centos7查看端口开放情况firewall-cmd --list-ports# centos7放行端口# 注意：--permanent意为重启也生效firewall-cmd --zone=public --add-port=80/tcp --permanent# centos7关闭端口放行firewall-cmd --remove-port=80/tcp --permanent# 检验配置是否成功# 注意：其他机器连接需使用具体的ip地址sudo docker -H 127.0.0.1:2375 images因笔者所用python环境、及其他环境，现目前全是基于docker镜像，因此经常用到Pycharm+Docker的方式进行开发环境搭建，需要开启远程连接配置。"
    } 
  
  ,
  
   {
     
     
   } ,
  
   {
     
     
   } ,
  
   {
     
     
   } ,
  
   {
     
     
   } ,
  
   {
     
     
   } ,
  
   {
     
     
   } ,
  
   {
     
     
   } 
  
];

var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: jsondata,
    searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false,
    exclude: []
  })


