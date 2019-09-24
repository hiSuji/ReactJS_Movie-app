## [ ReactJS로 Movie app 만들기]

- ‘Nomadcoders - ReactJs로 웹 서비스 만들기’ 강의를 토대로 공부한 내용을 정리하였습니다.

- 강의와 다르게 변경한 부분은 다음과 같습니다.

  - Class 기반 컴포넌트가 아닌 Functional 컴포넌트를 사용하였습니다.

  - 클래스 컴포넌트의 Component LifeCycle API를 함수 컴포넌트에서도 사용하기 위해 React Hooks을 이용하였습니다.

    

1. #### ReactJS 장점

   - **Just JavaScript**
     
     - No framework to learn
   - **Composition**
     
     - 요소별, 컴포넌트별로 나눠서 작업 가능
   - **Unidirectianal Dataflow**
     - 데이터는 항상 일정한 장소에 위치해있고, 그 장소에서만 변경 가능
     - If the state chages, the UI updates
     
     

2. #### PROPS(=properties)

   - props란 상위 컴포넌트에 저장한 데이터로, 
     이 데이터를 하위 컴포넌트로 전달하여 사용합니다.

   - 값 변경ⅹ (단, 상위 컴포넌트에서 변경하는 것은 가능)
     
   - 전달된 props 확인 방법

     - 클래스 컴포넌트

     - ```
       class App extends React.Component {
           render() {
               return <h1>Hello {this.props.title}</h1>;
           }
       }
       ```

     - 함수 컴포넌트

     - ```
       function App(props) {
           return(<h1>Hello {props.title}</h1>);
       }
       ```

   

3. #### PropTypes

   - props 값 검증
   - 상위 컴포넌트에서 넘어오는 데이터의 종류와 데이터 유무 확인 가능

   ```
   function Movie(props) {
       return (
           <div>
               <MoviePoster poster={props.poster}/>
               <h1 >
                   {props.title}
               </h1>
           </div>
       );
   }
   
   Movie.propTypes = {
       title: PropTypes.string.isRequired,
       poster: PropTypes.string.isRequired
   }
   ```



4. #### State

   - props와 비슷하지만 다른 점은 값 변경이 가능합니다.
- setState(updater[, callback]) 이용



5. #### The Component Lifecycle

   - 라이프 사이클은 컴포넌트의 Initialization, Mounting, Update, Unmounting 의 일련의 과정을 뜻합니다.

     ![image](https://user-images.githubusercontent.com/47530310/61043818-280fc700-a412-11e9-8a45-f770ead03e5e.png)

> *출처: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/*



6. #### React Hooks

   - class 없이 state와 lifecycle method 사용이 가능합니다.
   - useStste, useEffect 이용
   
     - useEffect는 componentDidMount, componentDidUpdate, componentWillUnmount 대체한다.
   
   - ```
     import React, { useState, useEffect } from 'react';
     ```
   
   - ```
     const [greeting, setGreeting] = useState('Hello!');
          
         useEffect(() => {
             setTimeout(() => {
                 setGreeting('something')
             }, 2000);
         });
     ```
     
     - useEffect(fn, [ ])
              - 빈 배열을 매개변수로 전달하면 처음 렌더링 때에만 fn이 호출됩니다.
                    
   
7. #### asycn와 await

   - **async(=asynchronous, 비동기)**
     
     - 이전 작업이 끝날 때까지 기다리지 않고 실행되며 Promise를 반환합니다.
   - **await**
     - Promise 수행 결과의 성공 여부에 상관없이 끝나기만을 기다립니다.
     - async 키워드를 사용해야지만 await를 사용할 수 있습니다.
     
     

8. #### css 클래스 적용하기

     - ```
       render() {
     	 	 	return <span className="menu navigation menu">Menu</span>
       }
       ```
     
     - class는 자바스크립트 키워드이기에 JSX에서는 className을 사용합니다.
       - JSX
         - React 컴포넌트를 만들 때 사용하는 언어로 JavaScript를 학장한 문법입니다.

------

※ 완성된 화면

​     ![image](https://user-images.githubusercontent.com/47530310/65488115-5403fa00-dee3-11e9-8f63-e61faf4d31d3.PNG)

