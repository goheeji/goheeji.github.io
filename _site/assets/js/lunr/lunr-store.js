var store = [{
        "title": "[Jekyll]Notice 스타일 적용하기 ",
        "excerpt":"**Notice.:** 기본적인 Notice {: .notice} **Promary Notice** 중요한 Notice {: .notice--primary} **Info Notice** 정보 Notice {: .notice--info} **warning Notice:** 경고 Notice {: .notice--warning} **Danger Notice:** Danger Notice {: .notice--danger} **Success Notice:** Success Notice {: .notice--success} 적용예: Notice.: 기본적인 Notice Promary Notice 중요한 Notice Info Notice 정보 Notice warning Notice: 경고...","categories": ["빵부스러기"],
        "tags": ["notice","jekyll"],
        "url": "http://localhost:4000/%EB%B9%B5%EB%B6%80%EC%8A%A4%EB%9F%AC%EA%B8%B0/apply-notice-style/",
        "teaser": null
      },{
        "title": "[Markdown]마크다운(markdown) 문법 총정리",
        "excerpt":"1. 헤더 Headers 큰제목: 문서제목 This is a H1 ============= 적용예: This is a H1 작은제목: 문서 부제목 This is a H2 ---------------- 적용예: This is an H2 글머리: 1~6까지만 지원 # This is a H1 ## This is a H2 ### This is a H3 #### This is a...","categories": ["Markdown"],
        "tags": ["Markdown"],
        "url": "http://localhost:4000/markdown/markdown-Syntax/",
        "teaser": null
      },{
        "title": "[Jekyll]내 블로그 구글 검색 가능하게 하기",
        "excerpt":"1. URL prefix에 블로그 주소 입력하기 자신의 블로그 게시글이 구글에서 검색이 가능하게 하고싶다면 Google Search Console을 통해 등록을 해야한다. 좌측은 구매한 도메인이 있을때 사용이 가능하며 하나의 도메인 등록을 통해 모든 서브도메인을 통합 관리하는 방식이다. 우측(URL prefix)은 일반적인 GitBlog일때 사용한다. 우리는 우측 URL prefix 방식으로 진행한다. URL 입력란에 자신의 깃허브 블로그...","categories": ["Git"],
        "tags": ["GitBlog","jekyll"],
        "url": "http://localhost:4000/git/how-to-searched-google/",
        "teaser": null
      },{
        "title": "[Github].gitignore File 적용하기",
        "excerpt":".gitignore 란? 버전관리에서 제외시킬 파일들의 목록을 가진 설정 파일 .gitignore 파일 만들기 1. .gitignore파일을 만든다. 항상 최상위 디렉토리에 존재해야한다. 버전관리에서 제외시킬 파일 또는 디렉터리를 입력한다. 문법 예시 # : comments # no .a files *.a # but do track lib.a, even though you're ignoring .a files above !lib.a # only...","categories": ["Git"],
        "tags": ["Github"],
        "url": "http://localhost:4000/git/apply-.gitignore-file/",
        "teaser": null
      },{
        "title": "[Java] 함수(Fuction)",
        "excerpt":"함수란 무엇인가요? 함수 (function) 하나의 기능을 수행하는 일련의 코드 함수는 호출하여 사용하고 기능이 수행된 후 값을 반환 할 수 있음 함수로 구현된 기능은 여러 곳에서 호출되어 사용 될 수 있음 함수를 쓰는 것을 “함수를 호출한다”라고 한다. 이 결과를 나를 호출해준 함수에 돌려준다 라는것은 반환 값을 리턴할 수 있다는 것. 함수(function)의...","categories": ["Java"],
        "tags": ["java","fuction"],
        "url": "http://localhost:4000/java/function/",
        "teaser": null
      },{
        "title": "[Git] Git 취소하기 명령어 모음",
        "excerpt":"1. git add 취소하기 git add를 취소한다는 말은 git status를 했을때 파일 상태를 unstage로 변경한다는 말과 같다. “Staging Area” 는 사용자가 git commit 명령을 실행했을 때, Git이 처리할 것들이 있는 곳이다. 아래와 같이 실수로 git add . 명령을 사용하여 모든 파일을 Staging Area에 넣은 경우 git reset HEAD [file] 명령어를...","categories": ["Git"],
        "tags": ["Git"],
        "url": "http://localhost:4000/git/git-undo-command/",
        "teaser": null
      },{
        "title": "[Java] 메서드(Method)",
        "excerpt":"메서드(method)란? 객체의 기능을 구현하기 위해 클래스 내부에 구현되는 함수 메서드를 구현함으로써 객체의 기능이 구현 됨 메서드의 이름은 사용하는 쪽(클라이언트 코드)에 맞게 명명하는 것이 좋음 예) getStudentName() cf) 클래스 이름은 대문자 패키지이름은 소문자 변수와 메서드 이름은 camelNotaion이 좋다. 스택 메모리(Stack Memory) 함수 호출시 사용되는 메모리 종류 아래의 코드를 보며 스택 메모리의...","categories": ["Java"],
        "tags": ["java","method"],
        "url": "http://localhost:4000/java/method/",
        "teaser": null
      },{
        "title": "[Java] 인스턴스(Instance)와 힙메모리(HeapMemory)",
        "excerpt":"인스턴스 클래스로부터 생성된 객체 힙 메모리에 멤버 변수의 크기에 따라 메모리가 생성. 클래스를 기반으로 new키워드를 이용하여 여러개의 인스턴스를 생성한다. package classpart; public class StudentTest { public static void main(String[] args) { Student studentLee = new Student(); studentLee.studentName = \"이순신\"; studentLee.address = \"서울\"; studentLee.showStudentInfo(); Student studentKim = new Student(); studentKim.studentName =...","categories": ["Java"],
        "tags": ["java","instance","HeapMemory"],
        "url": "http://localhost:4000/java/Instance&HeapMemory/",
        "teaser": null
      },{
        "title": "[Java] 생성자(constructor)와 생성자 오버로딩(constructor overroding)",
        "excerpt":"생성자(constructor) 객체를 생성할 때 new 키워드와 함께 호출(객체 생성 외에는 호출할 수 없음) 인스턴스를 초기화 하는 코드가 구현됨(주로 멤버 변수 초기화) 반환 값이 없음, 상속되지 않음 생성자는 클래스 이름과 동일 사실 우리는 생성자를 사용했었다. 아래의 코드를보자. Student studentLee = new Student(); 이것은 기본생성자라고 한다. 기본 생성자(default constructor) 하나의 클래스에는 반드시...","categories": ["Java"],
        "tags": ["java","constructor","overroding"],
        "url": "http://localhost:4000/java/constructor&constructorOverroding/",
        "teaser": null
      },{
        "title": "[Java] 참조 자료형(Reference Data Type)",
        "excerpt":"참조 자료형(reference data type) 변수의 자료형 기본자료형: int, long, float, double 참조 자료형: String, Date, Student 등 변수는 크게 두가지 자료형으로 나눌수있다. 기본 자료형은 사용하는 메모리가 정해져 있지만, 참조 자료형은 클래스에 따라 다르다. 클래스형으로 변수를 선언한다 대표예) String name; 참조 자료형 직접 만들어 사용하기 학생클래스(Student)에 있는 과목 이름, 과목 성적...","categories": ["Java"],
        "tags": ["java","reference data type"],
        "url": "http://localhost:4000/java/referenceDataType/",
        "teaser": null
      }]
