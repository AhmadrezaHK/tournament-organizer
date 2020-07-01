import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export function useMq(type) { //type: 'only', 'up', 'down',
    return {
        xs: useMediaQuery(useTheme().breakpoints[type]("xs")),
        sm: useMediaQuery(useTheme().breakpoints[type]("sm")),
        md: useMediaQuery(useTheme().breakpoints[type]("md")),
        lg: useMediaQuery(useTheme().breakpoints[type]("lg")),
        xl: useMediaQuery(useTheme().breakpoints[type]("xl")),
    };
}

export function useMqProperty({ xs, sm, md, lg, xl } = { xs: "", sm: "", md: "", lg: "", xl: "" }) {
    const mq = useMq('only');
    return [mq.xs && xs, mq.sm && sm, mq.md && md, mq.lg && lg, mq.xl && xl].find(Boolean);
}

export function useMqList() {
    return useMqProperty({xs: "xs", sm: "sm", md: "md", lg: "lg", xl: "xl"});
}
