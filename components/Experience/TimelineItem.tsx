type Props = {
    role: string;
    company: string;
    duration: string;
    location: string;
    project: string;
    description: string;
};

export default function TimelineItem({
    role,
    company,
    duration,
    location,
    project,
    description,
}: Props) {
    return (
        <div className="relative pl-10">

            {/* Dot */}

            <div className="absolute left-[-10px] top-2 h-5 w-5 rounded-full border-4 border-cyan-400 bg-slate-950" />

            <span className="text-sm font-medium text-cyan-400">
                {duration}
            </span>

            <h3 className="mt-2 text-2xl font-bold">
                {role}
            </h3>

            <p className="mt-1 text-lg text-slate-300">
                {company}
            </p>

            <p className="text-sm text-slate-500">
                {location}
            </p>

            <p className="mt-5 leading-7 text-slate-400">
                {description}
            </p>
            <span className="mt-4 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                {project}
            </span>
        </div>
    );
}