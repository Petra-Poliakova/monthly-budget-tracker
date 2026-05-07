import {useNavigate} from 'react-router'

export const PageNotFound = () => {
    const navigate = useNavigate();

  return (
    <div style={{display: 'flex', flex:'1', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '0', gap: '25px'}}>
        <div style={{color:'var(--color-primary)', fontSize: '24px'}}>404 Error</div>
        <div style={{color:'var(--color-text-main)', fontSize: '32px', fontWeight: 'bold'}}>Page Not Found</div>
        <div>Sorry, we couldn’t find the page you’re looking for.</div>
        <div>
            <button onClick={() => navigate('/')} style={{backgroundColor: 'var(--color-primary)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer',}} > 
                Go Back Home
            </button>
        </div>
    </div>
  )
}
