import { useAuth } from '../hooks/useAuth';
import { Layout } from '../components/layout';

export const Home = (): JSX.Element => {
  document.title = 'Home';
  const { logOut } = useAuth();


  return (
    <Layout>
      <div style={{
        width: '100%',
        height: '100vh',
      }} className='section is-fullwidth is-fullheight has-background-dark '>
        <h1 className="title is-1 is-white has-text-white">Home page</h1>
        <h1 className='title has-text-white'></h1>

        <button className='button is-danger' onClick={logOut}>Log out</button>
      </div>
    </Layout>
  );
};