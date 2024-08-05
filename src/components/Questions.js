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
        }}>
            <div style={{ 
                display: 'flex',
                fontSize: '16px',
                overflow:'hidden',
                marginTop:'4rem',
            }} >
                    <div style={{
                        marginTop: 20, 
                        padding: 5, 
                        display: 'flex', flexWrap: 'wrap',
                        background: !isDarkMode ? '#fff' : 'none',
                        overflow:'hidden',
                        borderRadius:'8px',
                        animation: 'fadeIn 1.5s ease-in-out forwards',
                        }}>
                    {questions.map((line, index ) => (
                        <div style={{ margin: 10, padding: 5, width:'40%'}}>
                        {line.title && (
                             <Typography style={{
                            fontWeight: 'bold',
                            marginBottom: 10,  
                             fontSize: '16px',
                             fontFamily: '"Nunito Sans", sans-serif',
                             color: !isDarkMode ? 'rgba(26, 26, 26, 0.851)' : 'rgba(196, 196, 187, 0.93)',
                            }}>{line.title}</Typography>              
                            )}
                        <Typography style={{
                             fontSize: '16px',
                             fontFamily: '"Nunito Sans", sans-serif',
                             color: !isDarkMode ? 'rgba(26, 26, 26, 0.851)' : 'rgba(196, 196, 187, 0.93)',
                            }}>{line.question}</Typography>
                             <Typography style={{
                             fontSize: '16px',
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