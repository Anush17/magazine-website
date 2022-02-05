const borderTop = {
    borderTopColor: 'transparent'
}

const Loading = () => (
    <div className="pt-16 z-50 backdrop-filter flex-center flex-col backdrop-blur-sm absolute top-0 left-0 w-full h-full ">
        <div className="w-8 h-8 border-2 border-black rounded-full mx-auto animate-spin" style={borderTop} />
        <p className="py-2 text-black text-sm secondary-font-family">Loading...</p>
    </div>
);

export default Loading;
