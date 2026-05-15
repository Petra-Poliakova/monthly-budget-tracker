import  { useState, type ReactNode } from "react";
import {BudgetInputs} from "@/components/BudgetInputs.tsx";
import {HeroIntro} from "@/components/HeroIntro.tsx";
import {SummaryCard, type TSummaryCardProps} from "@/components/SummaryCard";
import {CategoryDropDown} from "@/components/CategoryDropDown";

import {formatCurrency} from '@/utils/formatCurrency'

import { useLocalStorage } from "@/hooks/useLocalStorage";

import {Container, Grid, } from "@mui/material";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

import "./Home.scss";

type TExpenses ={
    id: number | null,
    category: string | null,
    icon: ReactNode | null,
    name: string | null,
    amount: number | null,
}

type TBudgetData = {
    monthlyIncome: number | null;
    savingsGoal: number | null;
    expenses: TExpenses [];
}

const defaultBudgetData: TBudgetData = {
    monthlyIncome: null,
    savingsGoal: null,
    expenses: [{id: null, category: null, icon: null, name: null, amount: null}],
};

export const Home = () => {
    const [budgetData, setBudgetData] = useLocalStorage<TBudgetData>('budget-tracker', defaultBudgetData);
    const [formExpenses, setFormExpenses] = useState<TExpenses>({id: null, category: null, icon: null, name: null, amount: null})

    console.log('formExpenses',formExpenses);

    const monthlyExpenses = 1425;
    const balance = budgetData.monthlyIncome - monthlyExpenses;
    const afterSavingsGoal = balance - (budgetData.savingsGoal ?? 300);

    const kpiData : TSummaryCardProps[] = [
        {
            title: "Monthly Income",
            value: formatCurrency(budgetData.monthlyIncome),
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

    const handleMonthlyIncome = (monthlyIncome: number)=> {
        setBudgetData((currentData) => ({
            ...currentData,
            monthlyIncome,
        }));
    }

    const handleSavingsGoal = (savingsGoal: number) => {
        setBudgetData((currentData) => ({
            ...currentData,
            savingsGoal,
        }));
    }

    const handleCategoryChange = (category: string) => {
        setFormExpenses((currentData) => ({
            ...currentData, category
        }));
    };

    //handleAddFormExpenses


    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid size={{xs: 12, md: 6}}>
                    <HeroIntro/>
                </Grid>

                <Grid size={{xs: 12, md: 6}}>
                    <BudgetInputs
                        income={budgetData.monthlyIncome}
                        savingsGoal={budgetData.savingsGoal}
                        onIncomeChange={handleMonthlyIncome}
                        onSavingsGoalChange={handleSavingsGoal}
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

            <Grid>
                <CategoryDropDown categoryValue={formExpenses.category ?? ""} onCategoryChange={handleCategoryChange}/>
            </Grid>
        </Container>
    );
};
