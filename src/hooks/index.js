import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export function useMqProperty({ xs, sm, md, lg, xl } = { xs: "", sm: "", md: "", lg: "", xl: "" }) {
    const mq = {
        xs: useMediaQuery(useTheme().breakpoints.only("xs")),
        sm: useMediaQuery(useTheme().breakpoints.only("sm")),
        md: useMediaQuery(useTheme().breakpoints.only("md")),
        lg: useMediaQuery(useTheme().breakpoints.only("lg")),
        xl: useMediaQuery(useTheme().breakpoints.only("xl")),
    };
    return [mq.xs && xs, mq.sm && sm, mq.md && md, mq.lg && lg, mq.xl && xl].find(Boolean);
}
