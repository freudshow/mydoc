#文件描述符与文件指针转换

```c
  //convert file* to fd
  #include <stdio.h>
  int fileno(FILE *stream);


  //convert fd to file*
  #include <stdio.h>
  FILE *fdopen(int fd, const char *mode);
```
