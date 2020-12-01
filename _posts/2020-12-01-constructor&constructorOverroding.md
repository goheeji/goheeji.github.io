---
toc: ture
toc_sticky: ture
title: "[Java] 생성자(constructor)와 생성자 오버로딩(constructor overroding)"
excerpt: "생성자와 생성자 오버로딩에 대해서 알아보자"

categories:
  - Java
tags:
  - java
  - constructor
  - overroding
---
## 생성자(constructor)
- 객체를 생성할 때 new 키워드와 함께 호출(**객체 생성 외에는 호출할 수 없음**)
- 인스턴스를 **초기화** 하는 코드가 구현됨(주로 멤버 변수 **초기화**)
- **반환 값이 없음**, 상속되지 않음
- 생성자는 **클래스 이름과 동일**

사실 우리는 생성자를 사용했었다. 아래의 코드를보자.
```
Student studentLee = new Student();
```
이것은 기본생성자라고 한다.

## 기본 생성자(default constructor)
- 하나의 클래스에는 반드시 하나 이상의 생성자가 존재해야함
- 프로그래머가 생성자를 구현하지않으면 자바 컴파일러가 생성자 코드를 넣어줌 (이게 기본생성자이다.)
- 기본생성자는 매개변수가 없고, 구현부가 없음
- **만약 클래스에 다른 생성자가 있는 경우 디폴트 생성자는 제공되지 않음** 

기본으로 생성성되는 기본생성자 말고 직접 생성자를 구현해보자

- "나는 학생을 생성할때 항상 학생의 이름과 학번을 초기화하고싶다."

```java
pubic Student(int id, String name){
	studentID = id;
	studentName = name;
	address = "주소없음";
}
```

- "이름은 꼭 초기화 하고싶다.""

```java
pubic Student(String name){
	studentName = name;
	}
```
이렇게 생성자를 여러개 놓을수있다. 이것을 **오버로딩(Overloading)**이라고한다.
이름이 같지만 매개변수가 다른경우에 여러개의 메서드나 생성자가 있을수 있다.

## 생성자 오버로딩(constructor overloading)

- 생성자를 두개이상 구현하는 경우
- 사용하는 코드에서 여러 생성자 중 선택하여 사용할 수 있음
- private 변수도 생성자를 이용하여 초기화를 할 수 있음

```java
private int studentID
```
이 클래스 내부에서만 사용가능한 변수. 외부에서는 참조할수 없다 라는 의미. 나중에 정보은닉을 배울때 더 자세히 배우겠다.


