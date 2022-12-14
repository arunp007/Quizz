from django.urls import path
from.import views

urlpatterns = [
    path('home', views.home, name = 'home'),
    path('html_home', views.html_home, name = 'html_home'),
    path('html_page1', views.html1, name = 'html1'),
    path('html_page2', views.html2, name = 'html2'),
    path('html_page3', views.html3, name = 'html3'),
    path('html_page4', views.html4, name = 'html4'),
    path('html_page5', views.html5, name = 'html5'),
    path('html_page6', views.html6, name = 'html6'),
    path('html_page7', views.html7, name = 'html7'),
    path('html_page8', views.html8, name = 'html8'),
    path('html_page9', views.html9, name = 'html9'),
    path('html_page10', views.html10, name = 'html10'),
    path('html_score', views.html_score, name = 'html_score'),
    path('css_home', views.css_home, name = 'css_home'),
    path('css_page1', views.css1, name = 'css1'),
    path('css_page2', views.css2, name = 'css2'),
    path('css_page3', views.css3, name = 'css3'),
    path('css_page4', views.css4, name = 'css4'),
    path('css_page5', views.css5, name = 'css5'),
    path('css_page6', views.css6, name = 'css6'),
    path('css_page7', views.css7, name = 'css7'),
    path('css_page8', views.css8, name = 'css8'),
    path('css_page9', views.css9, name = 'css9'),
    path('css_page10', views.css10, name = 'css10'),
    path('css_score', views.css_score, name = 'css_score'),
    path('javascript_home', views.javascript_home, name = 'javascript_home'),
    path('js_page1', views.js1, name = 'js1'),
    path('js_page2', views.js2, name = 'js2'),
    path('js_page3', views.js3, name = 'js3'),
    path('js_page4', views.js4, name = 'js4'),
    path('js_page5', views.js5, name = 'js5'),
    path('js_page6', views.js6, name = 'js6'),
    path('js_page7', views.js7, name = 'js7'),
    path('js_page8', views.js8, name = 'js8'),
    path('js_page9', views.js9, name = 'js9'),
    path('js_page10', views.js10, name = 'js10'),
    path('javascript_score', views.javascript_score, name = 'javascript_score'),
    path('mysql_home', views.mysql_home, name = 'mysql_home'),
    path('mysql_page1', views.mysql1, name = 'mysql1'),
    path('mysql_page2', views.mysql2, name = 'mysql2'),
    path('mysql_page3', views.mysql3, name = 'mysql3'),
    path('mysql_page4', views.mysql4, name = 'mysql4'),
    path('mysql_page5', views.mysql5, name = 'mysql5'),
    path('mysql_page6', views.mysql6, name = 'mysql6'),
    path('mysql_page7', views.mysql7, name = 'mysql7'),
    path('mysql_page8', views.mysql8, name = 'mysql8'),
    path('mysql_page9', views.mysql9, name = 'mysql9'),
    path('mysql_page10', views.mysql10, name = 'mysql10'),
    path('mysql_score', views.mysql_score, name = 'mysql_score'),
    path('python_home', views.python_home, name = 'python_home'),
    path('python_page1', views.python1, name = 'python1'),
    path('python_page2', views.python2, name = 'python2'),
    path('python_page3', views.python3, name = 'python3'),
    path('python_page4', views.python4, name = 'python4'),
    path('python_page5', views.python5, name = 'python5'),
    path('python_page6', views.python6, name = 'python6'),
    path('python_page7', views.python7, name = 'python7'),
    path('python_page8', views.python8, name = 'python8'),
    path('python_page9', views.python9, name = 'python9'),
    path('python_page10', views.python10, name = 'python10'),
    path('python_score', views.python_score, name = 'python_score'),
]