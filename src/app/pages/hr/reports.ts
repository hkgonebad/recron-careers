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
    { icon: 'remixFileEditFill', label: "Positions Filled", stat: 13 },
    { icon: 'remixFileTransferFill', label: "Positions Withdrawn", stat: 2 },
    { icon: 'remixBriefcase4Fill', label: "Open Positions", stat: 0 },
    { icon: 'remixFolderReceivedFill', label: "Received Applications", stat: 25 },
    { icon: 'remixDropboxFill', label: "Drop Box Applications", stat: 27 },
  ];
  
  
  
  export const functionData: PositionFilledFunctionData[] = [
    { icon: 'remixTv2Fill', function: 'IT', count: 15 },
    { icon: 'remixShakeHandsFill', function: 'HR', count: 3 },
    { icon: 'remixBuildingFill', function: 'Manufacturing', count: 1 },
    { icon: 'remixSettings3Line', function: 'Operations', count: 6 },
  ];
  
  
  
  export const locationData: PositionFilledLocationData[] = [
    { location: 'Nilai', count: 6 },
    { location: 'Melaka', count: 9 },
    { location: 'Kuala Lumpur', count: 7 },
  ];