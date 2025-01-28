import { useEffect, useState } from 'react'
import './App.css'

interface TelegramMessage {
    message: {
    photo?: { file_id: string }[]; // Массив объектов с file_id
    caption?: string; // Подпись к фото
    };
}

interface TelegramResponse {
    result: TelegramMessage[]; // Массив сообщений
}

interface Car {
    caption: string;
    photoUrl: string;
}

function App() {

    const [cars, setCars] = useState<Car[]>([]); // Храним данные о машинах


    const fetchTelegramData = async () => {
        try {
          const response = await fetch(
            "https://api.telegram.org/bot7683434863:AAGLEww0wPLvo9LVLEppXVmVYn3weVvG-1w/getUpdates"
          );
          const data: TelegramResponse = await response.json();
      
          // Фильтруем сообщения с фотографиями и подписями
          const carsData = await Promise.all(
            data.result
              .filter(
                (item) => item.message?.photo && item.message?.caption // Только сообщения с фото и подписью
              )
              .map(async (item) => {
                const photos = item.message.photo!;
                const largestPhoto = photos[photos.length - 1]; // Выбираем фото с максимальным разрешением
      
                // Получаем ссылку на файл через метод getFile
                const fileResponse = await fetch(
                  `https://api.telegram.org/bot7683434863:AAGLEww0wPLvo9LVLEppXVmVYn3weVvG-1w/getFile?file_id=${largestPhoto.file_id}`
                );
                const fileData = await fileResponse.json();
      
                return {
                  caption: item.message.caption!, // Текст сообщения
                  photoUrl: `https://api.telegram.org/file/bot7683434863:AAGLEww0wPLvo9LVLEppXVmVYn3weVvG-1w/${fileData.result.file_path}`, // URL фото
                };
              })
          );
      
          console.log("Массив данных о машинах:", carsData);
          setCars(carsData); // Сохраняем данные в состоянии
        } catch (error) {
          console.error("Ошибка при загрузке данных из Telegram:", error);
        }
      };
      
      

    useEffect(() => {
        fetchTelegramData(); // Загружаем данные при первом рендере
    }, []);

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
        {cars.length > 0 ? (
            cars.map((car, index) => {
                // Разделяем caption на название и цену
                const [name, ...details] = car.caption.split("\n"); // Разделяем строки по новой линии
                const price = details.find((line) => line.includes("Цена:")) || ""; // Ищем строку с ценой
                const description = details.filter((line) => !line.includes("Цена:")).join(" "); // Остальное в описание

                return (
                    <div className="col-md-4 card-car" key={index}>
                        <div className="card car-card">
                            <img
                                src={car.photoUrl}
                                className="card-img-top"
                                alt="Автомобиль"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                {price && <p className="card-price">{price}</p>} {/* Если цена есть, отображаем */}
                                {description && <p className="card-text">{description}</p>} {/* Остальной текст */}
                                <a href="#contact" className="btn btn-primary">
                                    Связаться
                                </a>
                            </div>
                        </div>
                    </div>
                );
            })
        ) : (
            <p className="text-center">Загрузка автомобилей...</p>
        )}

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
