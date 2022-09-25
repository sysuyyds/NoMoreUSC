from socket import *
from threading import Thread # 导入threading模块
from uuid import uuid4
from urllib.parse import unquote
import os
from modify import modify_html
# 创建服务器套接字
serverSocket = socket(AF_INET, SOCK_STREAM) # 创建TCP套接字
serverPort = 12000  # 设置服务器端口
serverSocket.bind(('', serverPort)) # 绑定服务器端口
serverSocket.listen(50)  # 设置服务器监听，最多可以接收50个连接

def handle_client(connectionSocket):    # 定义处理客户端请求的函数
    try:
        message = connectionSocket.recv(1024)   # 接收客户端请求，接收到的数据包放在message中，接收到的数据包最大长度为1024
        print(message.decode())  # 打印接收到的数据包
        filename = message.split()[1]   # 将请求的文件名提取出来
        _basedir = os.path.abspath(os.path.dirname(__file__))   # 获取当前运行所在目录
        print(filename)
        # 如果是.css或者.js文件或者txt或png
        if unquote(filename.decode('utf8'))[-4:] == '.css' or unquote(filename.decode('utf8'))[-3:] == '.js' or unquote(filename.decode('utf8'))[-4:] == '.txt' or unquote(filename.decode('utf8'))[-4:] == '.png' or unquote(filename.decode('utf8'))=="/PAGE/alive.html" or unquote(filename.decode('utf8'))=="/PAGE/NOWDATE.html":
            file = open(os.path.join(_basedir, unquote(filename.decode('utf8'))[1:]), 'rb')   # 打开文件
            connectionSocket.send(b'HTTP/1.1 200 OK\r\n\r\n')   # 如果打开文件成功，则向客户端发送200 OK
            print("Opensuccess\n")
            data = file.read(1024)  # 读取文件内容，每次读取1024个bytes
            uuid = str(uuid4()) # 生成随机UUID，用于标识每个客户端
            sent_size = 0   # 初始化已发送的字节数
            while data:
                connectionSocket.send(data) # 将文件内容发送给客户端
                sent_size += len(data)  # 已发送的字节数
                if sent_size % 500*1024 == 0:   # 每500KB发送，输出当前发送状态
                    print('Sending '+unquote(filename.decode('utf8'))+' to', connectionSocket.getpeername(), '('+uuid+')')
                data = file.read(1024)  # 继续读取文件内容，每次读取1024个bytes
            file.close()    # 关闭文件
            connectionSocket.send(b'')  # 发送空字节，表示文件发送完毕
            print('File sent to '+str(connectionSocket.getpeername())+'('+uuid+')') # 输出文件发送完毕
            connectionSocket.close()    # 关闭连接
        else:
            # split the message by /
            filename_list = unquote(filename.decode('utf8')).split('_')
            person_name = filename_list[0][1:]
            person_num = filename_list[1]
            person_apart = filename_list[2]
            start_time = filename_list[3]
            end_time = filename_list[4].split('.')[0]
            filename,_ = modify_html(person_name, person_num, person_apart, start_time, end_time)  # 调用modify_html函数，修改html文件
            file = open(os.path.join(_basedir, filename), 'rb')   # 打开文件
            connectionSocket.send(b'HTTP/1.1 200 OK\r\n\r\n')   # 如果打开文件成功，则向客户端发送200 OK
            print("Opensuccess\n")
            data = file.read(1024)  # 读取文件内容，每次读取1024个bytes
            uuid = str(uuid4()) # 生成随机UUID，用于标识每个客户端
            sent_size = 0   # 初始化已发送的字节数
            while data:
                connectionSocket.send(data) # 将文件内容发送给客户端
                sent_size += len(data)  # 已发送的字节数
                if sent_size % 500*1024 == 0:   # 每500KB发送，输出当前发送状态
                    print('Sending '+filename+' to', connectionSocket.getpeername(), '('+uuid+')')
                data = file.read(1024)  # 继续读取文件内容，每次读取1024个bytes
            file.close()    # 关闭文件
            connectionSocket.send(b'')  # 发送空字节，表示文件发送完毕
            print('File sent to '+str(connectionSocket.getpeername())+'('+uuid+')') # 输出文件发送完毕
            connectionSocket.close()    # 关闭连接
    except IOError:  # 如果打开文件失败，则向客户端发送404 Not Found
        print("IOError\n")
        connectionSocket.send(b'HTTP/1.1 404 Not Found\r\n\r\n')    # 向客户端发送404 Not Found
        connectionSocket.send(b'<html><head></head><body><h1>404 Not Found</h1></body></html>')   # 向客户端发送404 Not Found的页面
        connectionSocket.close()    # 关闭连接
    except IndexError:
        print("out of index")
        connectionSocket.send(b'HTTP/1.1 404 Not Found\r\n\r\n')    # 向客户端发送404 Not Found
        connectionSocket.send(b'<html><head></head><body><h1>404 Not Found</h1></body></html>')   # 向客户端发送404 Not Found的页面
        connectionSocket.close()    # 关闭连接
# 创建多线程处理客户端请求的函数
while True:
    print('Waiting for connection...')
    connectionSocket, addr = serverSocket.accept()  # 等待客户端连接
    print('Connected from:', addr)
    t = Thread(target=handle_client, args=(connectionSocket,))  # 创建多线程，处理客户端请求
    t.start()   # 启动多线程
# 关闭服务器套接字
serverSocket.close()

