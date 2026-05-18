import type { ReactNode } from "react";
import {Paper, Box, Stack, Typography} from "@mui/material";

export type TSummaryCardProps ={
    title: string,
    value: string | null,
    description: string,
    icon: ReactNode,
}

export const SummaryCard = ({ title, value, description, icon } : TSummaryCardProps) => {
    return (
        <Paper sx={{padding:2.5, borderRadius: 3, boxShadow: "var(--shadow)", height: "100%", width: "100%", minWidth: 0, boxSizing: "border-box"}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', gap: 2,}}>
                <Stack spacing={0.75} >
                    <Typography variant="body2" sx={{color:'var(--color-text-secondary)', fontWeight: 500}}>{title}</Typography>
                    <Typography component='p' sx={{color:'var(--color-text-main)', fontSize: 26, lineHeight: 1.15, fontWeight: 700}}>{value}</Typography>
                    <Typography variant="body2" sx={{color:'var(--color-text-secondary)',}}>{description}</Typography>
                </Stack>
                <Box aria-hidden="true" sx={{width:48, height:48, backgroundColor:'var(--color-icon-bg)', borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,}}>{icon}</Box>
            </Box>
        </Paper>
    );
};

