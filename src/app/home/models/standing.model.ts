interface Standing {
    id: number;
    letter: string;
    ordered_teams: Orderedteam[];
}

interface Orderedteam {
    id?: number;
    country?: string;
    alternate_name?: any;
    fifa_code?: string;
    group_id?: number;
    group_letter?: string;
    wins?: number;
    draws?: number;
    losses?: number;
    games_played?: number;
    points?: number;
    goals_for?: number;
    goals_against?: number;
    goal_differential?: number;
}