import React from 'react';

function AboutProject() {
  return (
    <section className='about-project'>
      <h2 className='section-title'>О проекте</h2>
      <div className='about-project__container'>
        <div className='about-project__content'>
          <h3 className='about-project__title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__content'>
          <h3 className='about-project__title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className='about-project__path-line-container'>
        <p className='about-project__path-line-step about-project__path-line-step_type_backend'>
          1 неделя
        </p>
        <p className='about-project__path-line-step about-project__path-line-step_type_frontend'>
          4 недели
        </p>
        <p className='about-project__path-line-description about-project__path-line-description_type_backend'>
          Back-end
        </p>
        <p className='about-project__path-line-description about-project__path-line-description_type_frontend'>
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
