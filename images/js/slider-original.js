/**
 * Слайдер с сайта PCVector.net
 * Оригинальная версия: https://pcvector.net/scripts/js/66-prostoj-jquery-slajder-dlja-sajta.html
 * Скрипт используется БЕЗ ИЗМЕНЕНИЙ
 */

$(document).ready(function(){
    var items = $('.slider__item'),
        slider = $('.slider'),
        indicator = $('.slider__indicators li'),
        slideCount = items.length,
        currentSlide = 0,
        autoSlideInterval;
    
    // Функция для перехода к определенному слайду
    function goToSlide(n) {
        items.eq(currentSlide).removeClass('active');
        indicator.eq(currentSlide).removeClass('active');
        currentSlide = (n + slideCount) % slideCount;
        items.eq(currentSlide).addClass('active');
        indicator.eq(currentSlide).addClass('active');
        $('.slider__items').css('transform', 'translateX(-' + currentSlide * 100 + '%)');
    }
    
    // Функция для следующего слайда
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Функция для предыдущего слайда
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Автопрокрутка слайдов
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Инициализация слайдера
    function initSlider() {
        if (slideCount === 0) return;
        
        // Активируем первый слайд
        items.eq(0).addClass('active');
        indicator.eq(0).addClass('active');
        
        // Обработчики для кнопок
        $('.slider__control_next').click(function(e) {
            e.preventDefault();
            nextSlide();
            resetAutoSlide();
        });
        
        $('.slider__control_prev').click(function(e) {
            e.preventDefault();
            prevSlide();
            resetAutoSlide();
        });
        
        // Обработчики для индикаторов
        indicator.click(function() {
            var slideTo = $(this).index();
            goToSlide(slideTo);
            resetAutoSlide();
        });
        
        // Останавливаем автопрокрутку при наведении
        slider.hover(
            function() {
                stopAutoSlide();
            },
            function() {
                startAutoSlide();
            }
        );
        
        // Запускаем автопрокрутку
        startAutoSlide();
    }
    
    // Функция сброса таймера автопрокрутки
    function resetAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }
    
    // Инициализируем слайдер
    initSlider();
});