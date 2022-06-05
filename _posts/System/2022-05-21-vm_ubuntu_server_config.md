
### VMWare Ubuntu Server 设置共享文件夹

- install vmtools

    `apt install openvm-tools`

- VM设置共享文件夹

- 使用`vmware-hgfsclient` 查看共享文件夹

- 使用：`sudo /usr/bin/vmhgfs-fuse .host:/ /mnt/hgfs -o subtype=vmhgfs-fuse,allow_other`
    - `mkdir /mnt/hgfs`

- 开机自动挂载：`vi /etc/fstab`添加：
    - `.host:/     /mnt/hgfs    fuse.vmhgfs-fuse allow_other,defaults    0    0`

### VSCode设置远程调试

- Extensions： Remote-SSH

