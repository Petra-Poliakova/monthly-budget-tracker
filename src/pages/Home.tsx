import { Container, Grid, Stack, Chip, Typography, Paper, TextField, Avatar, } from "@mui/material";
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import "./Home.scss";

export const Home = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack spacing={1}>
            <Chip 
              variant="outlined" 
              avatar={<Avatar sx={{bgcolor:'inherit'}}><SavingsOutlinedIcon fontSize="small" sx={{color:'var(--color-primary)'}}/></Avatar>} 
              label="Household budget calculator" 
              sx={{alignSelf:'flex-start', width:'fit-content', color:'var(--color-text-main)'}}
            />
            <Typography variant="h5" sx={{fontWeight:'bold', color:'var(--color-text-main)'}}>
              Monthly household finance overview
            </Typography>
            <Typography sx={{color:'var(--color-text-secondary)'}}>
              Enter your income, savings goal, and monthly expenses.
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2, borderRadius: 3, boxShadow:'var(--shadow)' }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Stack spacing={1}>
                  <Typography component="label" htmlFor="monthly-income" 
                    sx={{ fontSize: 14, fontWeight: 500, color: "text.primary", }}
                  >
                    Monthly income
                  </Typography>
                  <TextField id="monthly-income" variant="outlined" size="small" defaultValue="2200" fullWidth />
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Stack spacing={1}>
                  <Typography component="label" htmlFor="savings-goal" 
                    sx={{ fontSize: 14, fontWeight: 500, color: "text.primary", }}
                  >
                    Savings goal
                  </Typography>
                  <TextField id="savings-goal" variant="outlined" size="small" defaultValue="300" fullWidth />
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
