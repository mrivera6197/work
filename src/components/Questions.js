import { Typography } from '@mui/material';
import { questions } from './dummyData';
import { useDarkModeContext } from '../hooks/DarkModeProvider';

const Questions = () => {
    const { isDarkMode } = useDarkModeContext(); 
    return (
        <div 
        style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        height: '90vh',
        }}>
            <div style={{ 
                display: 'flex',
                fontSize: '14px',
                overflow:'hidden',
                marginTop:'4rem',
            }} >
                    <div style={{
                        padding: 5, 
                        display: 'flex', flexWrap: 'wrap',
                        background: !isDarkMode ? '#fff' : 'none',
                        overflow:'hidden',
                        borderRadius:'8px',
                        animation: 'fadeIn 1.5s ease-in-out forwards',
                        }}>
                    {questions.map((line, index ) => (
                        <div style={{ 
                            margin: 10, 
                            width:'40%', 
                            padding: 5, 
                            borderRadius: '8px',
                            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px', 
                            background: '#121212'}}>
                        {line.title && (
                            <Typography style={{
                            fontWeight: 'bold',
                            marginBottom: 5,  
                             fontSize: '14px',
                             fontFamily: '"Nunito Sans", sans-serif',
                             color: !isDarkMode ? 'rgba(26, 26, 26, 0.851)' : 'rgba(196, 196, 187, 0.93)',
                            }}>{line.title}</Typography>              
                            )}
                        <Typography style={{
                             fontSize: '14px',
                             fontFamily: '"Nunito Sans", sans-serif',
                             color: !isDarkMode ? 'rgba(26, 26, 26, 0.851)' : 'rgba(196, 196, 187, 0.93)',
                            }}>{line.question}</Typography>
                             <Typography style={{
                             fontSize: '14px',
                             fontFamily: '"Nunito Sans", sans-serif',
                             color: !isDarkMode ? 'rgba(26, 26, 26, 0.851)' : 'rgba(196, 196, 187, 0.93)',
                            }}>{line.value}</Typography>
                        </div>
                    ))}

                    </div>
            </div>
            </div>
    )
}

export default Questions; 