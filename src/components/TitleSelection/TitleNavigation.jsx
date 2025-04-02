import './title.css';

function TitleNavigation() {
    return (
        <div className='titleNavigation'>
            {/* Active Navigation Item */}
            <div className='titleNavigationItem titleNavigationItemActive'>
                <span className='titleNavigationText titleNavigationTextActive'>
                    Հոդվածի հիմնական տվյալներ
                </span>
            </div>

            {/* Regular Navigation Items */}
            <div className='titleNavigationItem'>
                <span className='titleNavigationText'>
                    Հեղինակի տվյալներ
                </span>
            </div>

            <div className='titleNavigationItem'>
                <span className='titleNavigationText'>
                    Հոդվածի ֆայլի վերբեռնում
                </span>
            </div>

            <div className='titleNavigationItem'>
                <span className='titleNavigationText'>
                    Վերանայեք և ներկայացրեք
                </span>
            </div>

            {/* Steps Indicator */}
            <div className='titleNavigationSteps'>
                <div className='titleNavigationStepsLine' />
                <div className='titleNavigationStepCircle titleNavigationStep1'>
                    <span className='titleNavigationStepNumber'>1</span>
                </div>
                <div className='titleNavigationStepCircle titleNavigationStep2'>
                    <span className='titleNavigationStepNumber'>2</span>
                </div>
                <div className='titleNavigationStepCircle titleNavigationStep3'>
                    <span className='titleNavigationStepNumber'>3</span>
                </div>
                <div className='titleNavigationStepCircle titleNavigationStep4'>
                    <span className='titleNavigationStepNumber'>4</span>
                </div>
            </div>
        </div>
    );
}

export default TitleNavigation;