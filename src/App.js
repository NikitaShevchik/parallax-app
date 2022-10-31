import styles from './App.module.scss';
import Article from './components/elements/article/Article';
import Welcome from './components/elements/welcome/Welcome';

function App() {
  window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${window.scrollY}px`;
  })

  return (
    <div className={styles.app}>
      <Welcome />
      <Article />
    </div>
  );
}

export default App;
