import React from 'react';

export interface ComparisonRow {
    feature: string;
    thermaskirt: React.ReactNode;
    alternative: React.ReactNode;
}

interface ComparisonTableProps {
    alternativeName: string;
    rows: ComparisonRow[];
}

export default function ComparisonTable({ alternativeName, rows }: ComparisonTableProps) {
    return (
        <div className="w-full overflow-x-auto rounded-xl border border-dh-grey-light my-12 bg-white">
            <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                    <tr className="bg-dh-grey-light">
                        <th className="p-5 font-semibold text-dh-dark border-b border-dh-grey-light/50 w-[20%]">Feature</th>
                        <th className="p-5 font-semibold text-dh-red border-b border-dh-grey-light/50 w-[40%] bg-white m-[-1px] shadow-[0_-2px_0_var(--dh-red)_inset]">
                            ThermaSkirt
                        </th>
                        <th className="p-5 font-semibold text-dh-dark border-b border-dh-grey-light/50 w-[40%]">
                            {alternativeName}
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-dh-grey-light">
                    {rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-dh-grey-light/20 transition-colors">
                            <td className="p-5 text-sm font-medium text-dh-dark align-top">
                                {row.feature}
                            </td>
                            <td className="p-5 text-sm text-dh-grey align-top bg-white/50">
                                {row.thermaskirt}
                            </td>
                            <td className="p-5 text-sm text-dh-grey align-top">
                                {row.alternative}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
