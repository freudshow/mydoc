# select()函数用法
## 原型

    #include <sys/time.h>
    #include <sys/types.h>
    #include <unistd.h>
    
    int select(int nfds, fd_set *readfds, fd_set *writefds,
              fd_set *exceptfds, struct timeval *timeout);
***
C库提供了以下的宏用于操作fd_set:

    void FD_CLR(int fd, fd_set *set);//清除set中的对应fd
    int  FD_ISSET(int fd, fd_set *set);//检测set中的fd是否ready
    void FD_SET(int fd, fd_set *set);//向set中加入fd
    void FD_ZERO(fd_set *set);//初始化set的各个位为0

实际上, fd_set 是一个128字节(具体长度由C库决定)的long int(具体类型由C库决定)
数组. 而fd的值被对应到fd_set的相应的位上.
比如fd = 5, 假如fd_set是用8bit来表示, 那么执行以下代码后,

    FD_ZERO(&set);
    FD_SET(fd, &set);
set 中的位模式变为:  0001 0000, 即除了第5位外, 其他位被置0.

select()函数执行后, 将fd_set中的ready文件描述符位都置1, 其他位置0.
所以在使用select之前, 先备份fd_set, 将其拷贝到输入select()参数中, 否则原始的fd_set就被修改. 且每次检测fd_set之前, 应重新执行FD_SET, 交给select()检测.