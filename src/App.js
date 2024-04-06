import React, {useState} from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, title: 'Avengers', views: 1000, favourite: false, like: false, dislike: false},
                {id: 2, title: 'Avatar', views: 800, favourite: false, like: false, dislike: false},
                {id: 3, title: 'Matrix', views: 900, favourite: false, like: false, dislike: false},
            ]
        }
    }

    addNewFor = (item) => {
        this.setState(({data}) => {
            const newArr = [...data, {...item}]
            return {data: newArr} 
        })
    }

    render() { 
        return ( 
            <div className='app'>
                <Header />
                <Main data={this.state.data}/>
                <Footer addNewFor={this.addNewFor}/>
            </div>
        );
    }
}
 


// const App = () => {

//     const data = [
//         {id: 1, title: 'Qasoskorlar (Infinity War)', views: 1000, favourite: false, like: false, dislike: false},
//         {id: 2, title: 'Avatar', views: 800, favourite: false, like: false, dislike: false},
//         {id: 3, title: 'Matritsa', views: 900, favourite: false, like: true, dislike: false},
//     ]
    
//     const onLike = (id, like) => {
//         const newArr = dataLike.filter(item => item.id==id)
//         console.log(newArr.like)
//     }
//     return(
//         <div className='app'>
//                 <Header />
//                 <Main data={data} onLike={onLike}/>
//                 <Footer />
//         </div>
//     )
// }

export default App