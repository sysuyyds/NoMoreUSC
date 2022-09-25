import os
import qrcode
from urllib.parse import quote
import argparse


def read_html():
    with open('PAGE.html', 'r', encoding="utf-8") as f:
        return f.read()


def modify_html(name, number, apartment, start_time, end_time):
    print("running...")
    file_name = '{}_{}_{}_{}_{}.html'.format(name, number, apartment, start_time, end_time)
    png_name = file_name.split('.')[0]+'.png'
    html = read_html()
    html = html.replace('辛吉德', name)
    html = html.replace('20350000', number)
    html = html.replace('PAGE/s.png',png_name)
    # html = html.replace('超级无敌学院', apartment)
    # html = html.replace('开始日期', start_time)
    # html = html.replace('结束日期', end_time)
    link_to_QR_code('http://你的二维码服务器地址:12000/'+file_name, png_name)
    # save to new file with name number apartment start_time end_time
    with open(file_name, 'w', encoding="utf-8") as f:
        f.write(html)
    

    return file_name, png_name


def link_to_QR_code(link, pic_filename):
    qr = qrcode.QRCode(
        version=1,
        box_size=3,
        border=5)
    tmp = link.split('/')
    tmp[-1] = quote(tmp[-1])
    tmp[0] += '/'
    link = '/'.join(tmp)
    print(link)
    qr.add_data(link)
    qr.make(fit=True)
    img = qr.make_image(fill='black', back_color='white')
    img.save(pic_filename)


