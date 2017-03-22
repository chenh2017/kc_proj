## file：读取文件路径
## title 默认为空
## shape='wide' 表格形状：wide\ long(显示n行表格)\ part(每列最多显示30个字符)\  normal\ small\会增加列间距
## n=10：long表格时，读取的前n行
## header=T：是否有标题行 F 无标题行， 1st_col 标题在第1列，需要转置表格
## sep='\t',
## digits=3,
## special.var=c('%','+','-')  表格中特殊字符

readtb <- function(
  file,
  title=NA,
  shape='wide',
  n=10,
  header=T,
  sep='\t',
  digits=3,
  special.var=c('%','+','-','/')
  ) {

  pt <- file(file, "r")
  name <- NULL


  #设置读取行数
  if(shape=='long' || shape=='part'){
    n <- n
  }else{
    n <- 30
  }

  #按行读入
  f1 <- readLines(pt, n)
  #替换特殊符号
  for (i in 1:length(special.var)){
    f1 <- gsub(special.var[i],paste('_sv_', i, sep=''), f1,fixed=TRUE)
  }
  
  #转置header在第1列的表格
  if(header=='1st_col'){
    data_tb <- read.table(text=f1, sep=sep)
    data_tb <- t(data_tb)
    colnames(data_tb) <- data_tb[1,]
    data_tb <- data_tb[-1,]
    header <- T
  } else {
    if (header) {
      name <- strsplit(f1[1], split=sep)[[1]];  #读取标题
      data_tb <- read.table(text=f1[-1], sep=sep, col.names=name)
    }else{data_tb <- read.table(text=f1, sep=sep)}
  }
  close(pt)

  #设置part表格
  if (shape=='part') {
    for (i in 1:ncol(data_tb)){
      data_tb[,i] <- as.vector(as.character(data_tb[,i]))
      for (j in 1:nrow(data_tb)) {
        if (nchar(data_tb[j,i]) > 30) {
          data_tb[j,i] <- substr(data_tb[j,i],1,30)
          data_tb[j,i] <- paste(data_tb[j,i],'...',sep='')
        }
      }
    }
  }
  
  

  #生成html代码(得到html代码的字符串向量)
  library(stargazer)
  star_tb <- stargazer(data_tb,header=header,summary=FALSE,rownames=FALSE,type="html",digits=digits)

  #设置标题th
  if (header) {
    star_tb[2] <- gsub("td", "th", star_tb[2])
  }

  #将stargazer生成的代码合并成一个字符串
  tablecode <- NULL
    for (i in star_tb) {
      tablecode <- paste(tablecode, i, sep = '')
      #强制不换行
      tablecode <- gsub("style=\"text-align:left\"", "style=\"text-align:left; white-space:nowrap;\"", tablecode)
    }
  
  #小表格设置居中
  if (shape=='normal' || shape=='small') {
    tablecode <- gsub("text-align:left;", "text-align:center;", tablecode, fixed = TRUE)
    plot(x=c(1,2,3),y=c(4,5,6))
  }

  #换回特殊符号
  for (i in 1:length(special.var)){
    sv_ <- paste('_sv_', i, sep='')
    tablecode <- gsub(sv_, special.var[i], tablecode,fixed=TRUE)
  }
  if(shape=='long' || shape=='part'){
    shape <- 'wide'
  }

  full_code <- ''
  if (!is.na(title)) {
    full_code <- paste(
      "<br><p class='name_tb'>",
      title,
      "</p>" ,
      sep=''
    )
  }
  full_code <- paste(full_code,
      "<div class=\"",shape,"_tb\"><center>",
      tablecode,
      "</center></div><br>",
      sep='')
  full_code
}