sudo apt install -y graphviz 
dot -version  #查看graphviz版本
dot -Tpng sample.dot -o sample.png  #编译成png图
dot -Tsvg sample.dot -o sample.png  #编译成png图