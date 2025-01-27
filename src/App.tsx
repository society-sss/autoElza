import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">AutoElite</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Переключить навигацию">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="#about">О нас</a></li>
                    <li className="nav-item"><a className="nav-link" href="#cars">Автомобили</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">Контакты</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <div id="bannerCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active"
                style={{backgroundImage: `url('https://vipmotors.ae/wp-content/uploads/PHOTO-2025-01-03-20-03-03-2-scaled-e1736240634959.jpg')`}}>
                <div className="carousel-caption">
                    <a href="#contact" className="btn btn-primary">Контакты владельца</a>
                </div>
            </div>
            <div className="carousel-item"
                style={{backgroundImage: `url('https://vipmotors.ae/wp-content/uploads/092e5033-a085-43d4-bc74-92a5f1aaefbc-scaled-e1726303731627.jpg')`}}>
                <div className="carousel-caption">
                    <a href="#contact" className="btn btn-primary">Контакты владельца</a>
                </div>
            </div>
            <div className="carousel-item"
                style={{backgroundImage: `url('https://vipmotors.ae/wp-content/uploads/PHOTO-2024-08-22-14-47-19-3-scaled-e1725032966894.jpg')`}}>
                <div className="carousel-caption">
                    <a href="#contact" className="btn btn-primary">Контакты владельца</a>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Предыдущий</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Следующий</span>
        </button>
    </div>

    <section id="cars" className="container py-5">
        <h2 className="text-center mb-4">Наши автомобили</h2>
        <div className="row g-4">
            <div className="col-md-4">
                <div className="card car-card">
                    <img src="https://vipmotors.ae/wp-content/uploads/PHOTO-2024-09-06-14-29-50-2-scaled-e1726492128423-825x483.jpg"
                        className="card-img-top" alt="Автомобиль"/>
                    <div className="card-body">
                        <h5 className="card-title">Mercedes-Benz S-className</h5>
                        <p className="card-text">Цена: $50,000</p>
                        <a href="#contact" className="btn btn-primary">Связаться</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card car-card">
                    <img src="https://vipmotors.ae/wp-content/uploads/PHOTO-2024-08-06-16-18-00-825x483.jpg"
                        className="card-img-top" alt="Автомобиль"/>
                    <div className="card-body">
                        <h5 className="card-title">BMW 7 Series</h5>
                        <p className="card-text">Цена: $60,000</p>
                        <a href="#contact" className="btn btn-primary">Связаться</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card car-card">
                    <img src="https://vipmotors.ae/wp-content/uploads/PHOTO-2023-09-12-11-47-13-9-e1722520721103-825x483.jpg"
                        className="card-img-top" alt="Автомобиль"/>
                    <div className="card-body">
                        <h5 className="card-title">Audi A8</h5>
                        <p className="card-text">Цена: $55,000</p>
                        <a href="#contact" className="btn btn-primary">Связаться</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" className="container py-5">
        <h2 className="text-center mb-4">О нас</h2>
        <p>Мы специализируемся на рекламе автомобилей премиум-класса. Наша цель — помочь вам найти автомобиль мечты. Мы
            работаем с проверенными продавцами и предоставляем только актуальную информацию.</p>
    </section>

    <footer>
        <p>&copy; 2025 AutoElite. Все права защищены.</p>
        <p>Email: info@autoelite.kg | Телефон: +996 XXX XXX XXX</p>
    </footer>
    </>
  )
}

export default App
