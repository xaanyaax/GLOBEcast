import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
let {title , description , imageUrl , newsUrl} = this.props;

    return (
        <div >
    <div className=' bg-blue-50 py-3 px-2 mx-2 border-1 border-gray-300 ' >
        <img src={imageUrl} alt="####" />
        <div className='text-2xl font-bold'>{title}</div>
        <br />
        <div className='text-lg'>{description}...</div>
        <br />
        <button type='button' className='cursor-pointer bg-blue-500 text-white h-8 w-25 rounded text-lg mx-30'><a href={newsUrl} target='_blank'>Read more</a></button>
    </div>
        </div>
    )
     
  }
}

export default NewsItem
