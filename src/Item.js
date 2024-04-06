import React, { useState } from "react"

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: false,
            dislike: false,
            favourite: false,
        }
    }

    onLike = () => {
        this.setState(({like}) => ({like: !like})) 
    }

    onDislike = () => {
        this.setState(({dislike}) => ({dislike: !dislike})) 
    }

    onFavourite = () => {
        this.setState(({favourite}) => ({favourite: !favourite})) 
    }
    
    render() {
        const {item} = this.props
        const {title, views} = item
        const {like, dislike, favourite} = this.state

        return (
            <div className='movie_item'>{title}  {views}
                <div>
                    <span className="span" onClick={this.onLike}><i className={ like ? 'fa-solid fa-thumbs-up': 'fa-regular fa-thumbs-up' }></i></span> 
                    <span className="span" onClick={this.onDislike}><i className={ dislike ? 'fa-solid fa-thumbs-down': 'fa-regular fa-thumbs-down' }></i></span>
                    <span className="span" onClick={this.onFavourite}><i className={ favourite ? 'fa-solid fa-star': 'fa-regular fa-star'}></i></span>
                </div>
            </div>
        );
    }
}

// const Item = (props) => {
//     const { item } = props
//     const {like, dislike, title, views, favourite} = item
    
//     const [onlike, setOnlike] = useState(false)

//     return (
//         <div className='movie_item'>{title}  {views}
//             <div>
//                 <span className="span" ><i className={ like ? 'fa-solid fa-thumbs-up': 'fa-regular fa-thumbs-up' }></i></span> 
//                 <span className="span"><i className={ dislike ? 'fa-solid fa-thumbs-down': 'fa-regular fa-thumbs-down' }></i></span>
//                 <span className="span"><i className={ favourite ? 'fa-solid fa-star': 'fa-regular fa-star'}></i></span>
//             </div>
//         </div>
//     )
// }

export default Item