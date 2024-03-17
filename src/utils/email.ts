export function getInitials(fullName: string): string {
    const namesArray = fullName.trim().split(/\s+/);
    const firstInitial = namesArray[0] ? namesArray[0][0].toUpperCase() : '';
    const lastInitial = namesArray[namesArray.length - 1] ? namesArray[namesArray.length - 1][0].toUpperCase() : '';
  
    return `${firstInitial}${lastInitial}`;
  }
  