import React from 'react'
import {v4 as uuid} from 'uuid'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            views: '',
            favourite: false,
            like: false,
            dislike: false
        }
    }

    changeHandlerInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addForm = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.views) {
            alert("Iltimos! Kinoni nomi va sonini kiriting...")
            return;
        }
        this.props.addNewFor({title: this.state.title, views: this.state.views, id: uuid()})
        this.setState({
            title: '',
            views: ''
        })
    }

    render() { 
        return ( 
            <div className='footer'>
                <div>
                    <form method='post'>
                        <p>Kinoni Nomini kiriting: <input type="text" name='title' onChange={this.changeHandlerInput} value={this.state.title}/></p>
                        <p>Kino Qancha ko'rilgan: <input type="number" name='views' onChange={this.changeHandlerInput} value={this.state.views}/></p>
                        <p><button className='btn' type="submit" onClick={(e) => this.addForm(e)}>Qo'shish</button></p>
                    </form>
                </div>
            </div>
        );
    }
}
 

// const Footer = () => {
//     return (
//         <div className='footer'>
//             <div>
//                 <form>
//                     <p>Kinoni Nomini kiriting: <input type="text" onChange={}/></p>
//                     <p>Kino Qancha ko'rilgan: <input type="number" /></p>
//                     <p><button className='btn' type="submit">Qo'shish</button></p>
//                 </form>
//             </div>
//         </div>
//     )
// }

export default Footer