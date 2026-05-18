import {Stack, Chip, Typography, Avatar,} from "@mui/material";
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';


export const HeroIntro = () => {
    return (
        <Stack spacing={1}>
            <Chip
                variant="outlined"
                avatar={<Avatar sx={{backgroundColor: 'inherit'}}><SavingsOutlinedIcon fontSize="small" sx={{color: 'var(--color-primary)'}}/></Avatar>}
                label="Household budget calculator"
                sx={{alignSelf: 'flex-start', width: 'fit-content', color: 'var(--color-text-main)'}}
            />
            <Typography variant="h5" sx={{fontWeight: 'bold', color: 'var(--color-text-main)'}}>
                Monthly household finance overview
            </Typography>
            <Typography sx={{color: 'var(--color-text-secondary)'}}>
                Enter your income, savings goal, and monthly expenses.
            </Typography>
        </Stack>
    )
}
