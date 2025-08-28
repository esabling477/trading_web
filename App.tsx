
import React, { useState } from 'react';
import Header from './components/Header';
import IconSidebar from './components/IconSidebar';
import InstrumentsPanel from './components/InstrumentsPanel';
import ChartArea from './components/ChartArea';
import TradingPanel from './components/TradingPanel';
import PositionsPanel from './components/PositionsPanel';
import { initialInstruments } from './constants';
import type { Instrument } from './types';

const App: React.FC = () => {
    const [selectedInstrument, setSelectedInstrument] = useState<Instrument>(initialInstruments[0]);

    return (
        <div className="flex flex-col h-screen font-sans text-sm">
            <Header />
            <main className="flex flex-grow overflow-hidden">
                <IconSidebar />
                <InstrumentsPanel
                    instruments={initialInstruments}
                    selectedInstrument={selectedInstrument}
                    onSelectInstrument={setSelectedInstrument}
                />
                <div className="flex flex-col flex-grow">
                    <ChartArea instrument={selectedInstrument} />
                    <PositionsPanel />
                </div>
                <TradingPanel instrument={selectedInstrument} />
            </main>
        </div>
    );
};

export default App;
