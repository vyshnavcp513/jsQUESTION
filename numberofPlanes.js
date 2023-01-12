function steps(source, plane, dest)
{
 
    if (Math.abs(source) > (dest))
        return Number.MAX_SAFE_INTEGER;
    if (source == dest) return plane;
    let pos = planes(source + plane + 1,
                    plane + 1, dest);
    let neg = planes(source - plane - 1,
                    plane + 1, dest);
    return Math.min(pos, neg);
}
 
    let dest = 11;
    document.write("No. of planes required to reach destination "+ dest + " is "+ planes(0, 0, dest));