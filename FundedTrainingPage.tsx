import Breadcrumbs from '@/components/Breadcrumbs';

const FundedTrainingPage = () => {
    return (
        <div>
            <Breadcrumbs items={[
                { label: 'Home', href: '/' },
                { label: 'Funded Training', href: '/funded-training' },
            ]} />
            <div className="hero">
                {/* Hero content... */}
            </div>
            {/* Other content... */}
        </div>
    );
};

export default FundedTrainingPage; 