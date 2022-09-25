import os



def read_html():
    with open('QR.html', 'r', encoding="utf-8") as f:
        return f.read()


def modify_html(name, number, apartment, start_time, end_time):
    html = read_html()
    html = html.replace('辛吉德', name)
    html = html.replace('20350000', number)
    html = html.replace('超级无敌学院', apartment)
    html = html.replace('开始日期', start_time)
    html = html.replace('结束日期', end_time)
    file_name = '{}_{}_{}_{}_{}.html'.format(name, number, apartment, start_time, end_time)
    # save to new file with name number apartment start_time end_time
    with open(file_name, 'w', encoding="utf-8") as f:
        f.write(html)

    return file_name

# print(os.path.join(os.path.abspath(os.path.dirname(__file__)), '/static/f.txt'))   # 获取当前运行所在目录