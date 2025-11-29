

const Background = () => {
    return (
        <div className="fixed inset-0 opacity-60 dark:opacity-50 pointer-events-none z-0 overflow-hidden">
            {/* Single Grid System */}
            <div className="absolute inset-0" style={{
                backgroundImage: `
          linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
        `,
                backgroundSize: '60px 60px'
            }}></div>


        </div>
    );
};

export default Background;
