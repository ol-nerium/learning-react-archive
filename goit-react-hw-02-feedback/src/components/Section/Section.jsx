import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <p className={css.section__title}>{title}</p>
      {children}
    </section>
  );
};

export default Section;
