export function Loader() {
  return (
    <div className="text-center py-12">
      <div className="relative inline-flex">
        {/* Внешнее кольцо */}
        <div className="h-12 w-12 rounded-full border-4 border-neutral-200"></div>

        {/* Вращающийся элемент */}
        <div
          className="absolute inset-0 h-12 w-12 rounded-full border-4 border-transparent 
                      border-t-primary-500 border-r-primary-500 animate-spin"
        ></div>

        {/* Центральная точка */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-primary-500 animate-pulse"></div>
        </div>
      </div>

      <p className="mt-4 text-neutral-700 font-medium">Загрузка...</p>

      {/* Дополнительные точки */}
      <div className="mt-2 flex justify-center space-x-1">
        <div
          className="h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse"
          style={{ animationDelay: '0s' }}
        ></div>
        <div
          className="h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse"
          style={{ animationDelay: '0.2s' }}
        ></div>
        <div
          className="h-1.5 w-1.5 rounded-full bg-primary-500 animate-pulse"
          style={{ animationDelay: '0.4s' }}
        ></div>
      </div>
    </div>
  );
}

// Компактный спиннер для кнопок
export function ButtonSpinner() {
  return (
    <div className="h-4 w-4">
      <div
        className="h-full w-full rounded-full border-2 border-transparent 
                     border-t-current border-r-current animate-spin"
      />
    </div>
  );
}
