export const timeUtils = {
    isTimeExceeded: (timestamp: number, limit: number): boolean => {
        return Date.now() - timestamp > limit;
    }
};
