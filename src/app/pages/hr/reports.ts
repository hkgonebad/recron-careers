export interface ReportData {
    icon: string;
    label: string;
    stat: number;
  }

  export interface PositionFilledFunctionData {
    icon: string;
    function: string;
    count: number;
  }

  export interface PositionFilledLocationData {
    location: string;
    count: number;
  }

  export const reportsData: ReportData[] = [
    { icon: 'remixFile2Fill', label: "Positions Posted", stat: 15 },
    { icon: 'remixFile2Fill', label: "Positions Filled", stat: 13 },
    { icon: 'remixFile2Fill', label: "Positions Withdrawn", stat: 2 },
    { icon: 'remixFile2Fill', label: "Open Positions", stat: 0 },
    { icon: 'remixFile2Fill', label: "Received Applications", stat: 25 },
    { icon: 'remixFile2Fill', label: "Drop Box Applications", stat: 27 },
  ];
  
  
  
  export const functionData: PositionFilledFunctionData[] = [
    { icon: 'remixFile2Fill', function: 'IT', count: 15 },
    { icon: 'remixFile2Fill', function: 'HR', count: 3 },
    { icon: 'remixFile2Fill', function: 'Manufacturing', count: 1 },
    { icon: 'remixFile2Fill', function: 'Operations', count: 6 },
  ];
  
  
  
  export const locationData: PositionFilledLocationData[] = [
    { location: 'Nilai', count: 6 },
    { location: 'Melaka', count: 9 },
    { location: 'Kuala Lumpur', count: 7 },
  ];