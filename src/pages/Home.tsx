import {useState} from "react";

import {BudgetInputs} from "@/components/BudgetInputs.tsx";
import {HeroIntro} from "@/components/HeroIntro.tsx";
import {SummaryCard, type TSummaryCardProps} from "@/components/SummaryCard";

import {formatCurrency} from '@/utils/formatCurrency'

import {Container, Grid, } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

import "./Home.scss";

export const Home = () => {
    const [income, setIncome] = useState<number | null>(null);
    const [savingsGoal, setSavingsGoal] = useState<number | null>(null);

    const monthlyIncome = income ?? 2200;
    const monthlyExpenses = 1425;
    const balance = monthlyIncome - monthlyExpenses;
    const afterSavingsGoal = balance - (savingsGoal ?? 300);

    const kpiData : TSummaryCardProps[] = [
        {
            title: "Monthly Income",
            value: formatCurrency(monthlyIncome),
            description: "Total household income",
            icon: <BusinessCenterIcon sx={{color:'var(--color-primary)'}}/>
        },
        {
            title: "Monthly Expenses",
            value: formatCurrency(monthlyExpenses),
            description: "65% of income",
            icon: <TrendingDownIcon sx={{color:'var(--color-primary)'}}/>
        },
        {
            title: "Balance",
            value: formatCurrency(balance),
            description: "Amount left after expenses",
            icon: <TrendingUpIcon sx={{color:'var(--color-primary)'}}/>
        },
        {
            title: "After Savings Goal",
            value: formatCurrency(afterSavingsGoal),
            description: "Balance after setting savings aside",
            icon: <SavingsOutlinedIcon sx={{color:'var(--color-primary)'}}/>
        },
    ]

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid size={{xs: 12, md: 6}}>
                    <HeroIntro/>
                </Grid>

                <Grid size={{xs: 12, md: 6}}>
                    <BudgetInputs
                        income={income}
                        savingsGoal={savingsGoal}
                        onIncomeChange={setIncome}
                        onSavingsGoalChange={setSavingsGoal}
                    />
                </Grid>
            </Grid>
            <Grid container columnSpacing={3} rowSpacing={3} sx={{mt: 3,}}>
                {kpiData.map((i) => (
                    <Grid key={i.title} size={{xs: 12, md: 6, lg: 3}} >
                        <SummaryCard title={i.title} value={i.value} description={i.description} icon={i.icon}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};
