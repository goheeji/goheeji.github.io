---
toc: ture
toc_sticky: ture
title: "[Blog]구글 검색 가능하게 하기"
excerpt: "내 게시글을 구글링되게 해보자"

categories:
  - Git
tags:
  - GitBlog
  - jekyll
---


## 1. URL prefix에  블로그 주소 입력하기
자신의 블로그 게시글이 구글에서 검색이 가능하게 하고싶다면 [Google Search Console](https://search.google.com/search-console/about?hl=ko&utm_source=wmx&utm_medium=wmx-welcome)을 통해 등록을 해야한다. 좌측은 구매한 도메인이 있을때 사용이 가능하며 하나의 도메인 등록을 통해 모든 서브도메인을 통합 관리하는 방식이다. 우측(URL prefix)은 일반적인 GitBlog일때 사용한다.

우리는 우측 URL prefix 방식으로 진행한다.
URL 입력란에 자신의 깃허브 블로그 주소를 적는다.
https://goheeji.github.io/

![Alt text](/assets/images/how-to-searched-google/1.png)

## 2. 소유권 인증하기

이제 블로그 도메인에 대한 소유권 인증을 진행한다. 사이트에 소유권자만이 구글 검색에 대해 허가를 내줄 수 있기 때문이다. 소유권 확인을 위한 html파일을 다운로드 한 후 

자신의 github jekyll 블로그 루트 디렉토리에 올리고 push를 한다. push를 했다면 확인버튼을 클릭하여 소유권 인증을 마무리한다.

## 3. sitemap.xml, robots.txt 생성하기
아직은 아무 정보가 없어 웹사이트 유입현황이나 정보를 취득하지 못한다. 물론 검색도 안된다. 구글 검색 엔진이 웹사이트를 읽어가는 작업이 진행되어야 검색이 노출되는데 이를 크롤링이라고 한다. 정상적인 크롤링을 위해서는 sitemap.xml과 robots.txt가 필요하다.

**sitemap.xml** <br>
웹사이트 내 모든 페이지의 목록을 나열한 파일이다. 책의 목차와 같은 역할을한다.
robots.txt 파일과는 다르게 sitemap.xml 파일은 꼭 루트 디렉토리에 위치하지 않아도된다.
sitemap.xml은 정해진 양식으로 제작되어야하고, 이 양식은 전세계적으로 약속된 방식이다.
{: .notice--info}

**robots.txt**<br>
검색 엔진 크롤러에서 사이트에서 요청할 수 있는 페이지나 요청할 수 없는 페이지를 설정 및 제어하는 부분이다.
검색 로봇들에게 웹사이트의 사이트맵이 어디있는지 알려주는 역할이다.
항상 root 폴더에 위치해 /robots.txt를 입력하면 확인 가능하다.
{: .notice--info}

### 3.1 sitemap.xml 생성
sitemap.xml을 수동으로 작성하기보단 jekyll-sitemap 플러그인을 통해서 관리하는 방법으로 생성한다.

우선 Gemfile에 하단 부분을 적어준다.

```
grm 'jekyll-sitemap'
```
이제 cmd창에서  bundle install 명령어를 통해서 플러그인 설치를 진행하고 서버를 시작한다.

```
# bundle install
# jekyll serve
```
정상적으로 설치가 되었다면 아래와 같이 접근이 가능하다.
http://localhost:4000/sitemap.xml
플러그인이 자동으로 페이지에 있는 모든 정보를 가지고 와서 sitemap을 만들어준다.

### 3.2 robots.txt 생성
자신의 github jekyll 블로그 루트 디렉토리에 robots.txt파일을 생성하고 아래의 내용을 작성한다.

```
User-agent: *
Allow: /

Sitemap: https://goheeji.github.io/sitemap.xml
```

모든 웹사이트 콘텐츠에 대한 모든 웹 크롤러의 접근을 차단<br><br>User-agent: \*<br>Disallow: /<br><br>만약 구글 로봇만 차단시키고 싶다면 User-agent에  \* 부분을 Googlebot으로 변경하여 설정<br><br>User-agent: Yeti<br>Disallow: /hello/<br><br>이렇게 설정하면 웹사이트의 모든 콘텐츠의 네이버 검색로봇의 크롤링을 허용하되, /hello/ 디렉토리 안의 페이지에 대한 접근만 차단한다는 의미이다.
{: .notice--info}

## 4. Google에 sitemap.xml 등록하기
우측 상단의 [Google Search Console](https://search.google.com/search-console/about?hl=ko&utm_source=wmx&utm_medium=wmx-welcome)페이지 메뉴 중 sitemaps에 들어가서 생성한 sitemap.xml을 제출한다.
<img src="/assets/images/how-to-searched-google/2.png" width="50%" height="50%"> 


**Please Note:**
sitemap까지 등록되었다면 검색 노출까지 일주일 정도 기간이 걸린다고 한다.
{: .notice--danger}



## Reference
https://honbabzone.com/jekyll/start-gitHubBlog/




