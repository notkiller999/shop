import { useState } from 'react';
import ProductCard from '../productCrad/ProductCard';
import './tab.scss';

const tabData = [
    {
        title: 'All',
        id: 'all'
    },
    {
        title: 'Favorite',
        id: 'favorite'
    },
    {
        title: 'Hits',
        id: 'hits'
    }
]

const contentData = [
    {
        id: 'all',
        content: 'https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg'
    },
    {
        id: 'favorite',
        content: 'https://w.forfun.com/fetch/5a/5a1990d39181006d97036d8ba802b48a.jpeg'
    },
    {
        id: 'hits',
        content: 'https://cdn.pixabay.com/photo/2022/10/03/21/47/fog-7496901__480.jpg'
    }
]

const Tab = () => {

    const [active, setActive] = useState('all');

    const renderTabs = (data) => {
        return data.map(item => {
            return (
                <div
                    id={item.id}
                    key={item.id}
                    className={`tab__item ${item.id === active ? 'tab__item-active' : null}`}
                    onClick={changeTab}>
                    {item.title}
                </div>
            )
        })
    }

    const changeTab = (e) => {
        setActive(e.target.id)
    }

    const renderContent = (data) => {
        return data.map(item => {
            return (
                <div
                    key={item.id}
                    className={`tab__content-item ${item.id === active ? 'active' : null}`}>
                    <img src={item.content} alt={item.id} />
                </div>
            )
        })
    }

    const elems = renderTabs(tabData)

    const content = renderContent(contentData)

    return (
        <div className="tab">
            <div className="tab__panel">
                {elems}
            </div>
            <div className="tab__content">
                {content}
            </div>
        </div>

    )
}

export default Tab