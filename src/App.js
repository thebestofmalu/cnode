import {route} from './router/index'
import {Route,Switch} from 'react-router-dom'
import {Layout} from 'antd'
import Header from './component/header';
import Footer from './component/footer';
import './static/css/index.css'

function App() {

  return (
    
    <Layout className="page">

    <Header/>

    <Layout.Content>
        <div className="warp">
      <Switch>
          {
            //遍历循环route组件 
          route.map(
            (itemData,index)=>{
              return (<Route
                key={index}
                path={itemData.path}
                exact={itemData.exact}

                render={(lss)=>{
                  console.log(lss);
                return itemData.render(lss);
              }}
            />)
          }
        )
      }
      </Switch>
      </div>
      </Layout.Content>

      <Footer/>
      </Layout>
    
  );
}

export default App;
