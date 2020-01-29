interface Match {
    venue: string;
    location: string;
    status: string;
    time: string;
    fifa_id: string;
    weather: Weather;
    attendance: string;
    officials: string[];
    stage_name: string;
    home_team_country: string;
    away_team_country: string;
    datetime: string;
    winner: string;
    winner_code: string;
    home_team: Hometeam;
    away_team: Hometeam;
    home_team_events: Hometeamevent[];
    away_team_events: Hometeamevent[];
    home_team_statistics: Hometeamstatistics;
    away_team_statistics: Hometeamstatistics;
    last_event_update_at: string;
    last_score_update_at: string;
}

interface Hometeamstatistics {
  country: string;
  attempts_on_goal: number;
  on_target: number;
  off_target: number;
  blocked: number;
  corners: number;
  offsides: number;
  ball_possession: number;
  pass_accuracy: number;
  num_passes: number;
  passes_completed: number;
  distance_covered: number;
  tackles: number;
  clearances?: number;
  yellow_cards?: number;
  red_cards: number;
  fouls_committed?: number;
  tactics: string;
  starting_eleven: Startingeleven[];
  substitutes: Startingeleven[];
}

interface Startingeleven {
  name: string;
  captain: boolean;
  shirt_number: number;
  position: string;
}

interface Hometeamevent {
  id: number;
  type_of_event: string;
  player: string;
  time: string;
}

interface Hometeam {
  country: string;
  code: string;
  goals: number;
  penalties: number;
}

interface Weather {
  humidity: string;
  temp_celsius: string;
  temp_farenheit: string;
  wind_speed: string;
  description: string;
}