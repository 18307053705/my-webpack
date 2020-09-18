
import React from 'react'


interface stateFace{
    hasError:boolean
}

class ErrorBoundary extends React.Component<{},stateFace> { //错误便捷处理
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
        console.log(error,'边界捕获错误...........')
      // 更新 state 使下一次渲染能够显示降级后的 UI
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        console.log(error,'边界捕获错误error...........');
        console.log(errorInfo,'边界捕获错误errorInfo...........');
      // 你同样可以将错误日志上报给服务器
    //   logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // 你可以自定义降级后的 UI 并渲染
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;